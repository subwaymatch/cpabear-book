import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { ErrorBoundaryErrorMessageFallback } from "@docusaurus/theme-common";
import type { Props } from "@theme/Mermaid";
import {
  MermaidContainerClassName,
  useMermaidConfig,
} from "@docusaurus/theme-mermaid/client";
import { loadMermaid } from "@docusaurus/theme-mermaid/lib/client/loadMermaid.js";
import { Maximize2, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import styles from "./styles.module.css";

type MermaidApi = Awaited<ReturnType<typeof loadMermaid>>;
type RenderResult = Awaited<ReturnType<MermaidApi["render"]>>;
type MermaidConfig = ReturnType<typeof useMermaidConfig>;

const MIN_ZOOM = 0.25;
const MAX_ZOOM = 4;
const ZOOM_STEP = 1.25;

// Mermaid is a global singleton: each render calls initialize() with the
// current theme, so concurrent renders (every diagram re-renders when the
// color mode switches) can clobber each other and come back empty. Run them
// one at a time instead.
let renderQueue: Promise<unknown> = Promise.resolve();

function renderSerially(
  id: string,
  text: string,
  config: MermaidConfig,
): Promise<RenderResult> {
  const run = renderQueue.then(async () => {
    const mermaid = await loadMermaid();
    mermaid.initialize(config);
    try {
      return await mermaid.render(id, text);
    } catch (e) {
      // Mermaid leaves an error SVG in the DOM when rendering fails.
      document.querySelector(`#d${id}`)?.remove();
      throw e;
    }
  });
  renderQueue = run.catch(() => undefined);
  return run;
}

function useSerialMermaidRender(text: string): RenderResult | null {
  // Mermaid needs a valid CSS id, which React's useId() does not provide.
  const [id] = useState(
    () => `mermaid-svg-${Math.round(Math.random() * 10000000)}`,
  );
  const config = useMermaidConfig();
  const [result, setResult] = useState<RenderResult | null>(null);

  useEffect(() => {
    let current = true;
    renderSerially(id, text, config)
      .then((r) => current && setResult(r))
      .catch((e) => {
        // Rethrow inside a state update so the error boundary catches it.
        if (current)
          setResult(() => {
            throw e;
          });
      });
    return () => {
      current = false;
    };
  }, [id, text, config]);

  return result;
}

function MermaidDiagram({ value }: Props): React.JSX.Element | null {
  const result = useSerialMermaidRender(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && ref.current) result.bindFunctions?.(ref.current);
  }, [result]);

  if (!result) return null;
  return (
    <div
      ref={ref}
      className={`${MermaidContainerClassName} ${styles.container}`}
      dangerouslySetInnerHTML={{ __html: result.svg }}
    />
  );
}

// A Mermaid diagram with an "Enlarge" control that opens it at full size in
// an overlay, where it can be zoomed and scrolled.
export default function Mermaid(props: Props): React.JSX.Element {
  const figureRef = useRef<HTMLDivElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const [source, setSource] = useState<SVGSVGElement | null>(null);

  const open = useCallback(() => {
    // The diagram renders client-side, so it may not exist yet.
    const svg = figureRef.current?.querySelector<SVGSVGElement>(
      `.${MermaidContainerClassName} svg`,
    );
    if (svg) setSource(svg);
  }, []);

  const close = useCallback(() => {
    setSource(null);
    expandButtonRef.current?.focus();
  }, []);

  return (
    <div className={styles.figure} ref={figureRef}>
      <div className={styles.diagram} onClick={open} title="Click to enlarge">
        <ErrorBoundary
          fallback={(params) => (
            <ErrorBoundaryErrorMessageFallback {...params} />
          )}
        >
          <MermaidDiagram {...props} />
        </ErrorBoundary>
      </div>
      <button
        ref={expandButtonRef}
        type="button"
        className={styles.expandButton}
        onClick={open}
        aria-label="Enlarge diagram"
        title="Enlarge diagram"
      >
        <Maximize2 size={16} aria-hidden="true" />
      </button>
      {source && <ZoomOverlay source={source} onClose={close} />}
    </div>
  );
}

function ZoomOverlay({
  source,
  onClose,
}: {
  source: SVGSVGElement;
  onClose: () => void;
}): React.JSX.Element {
  const viewportRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const box = source.viewBox.baseVal;
  const [fitZoom, setFitZoom] = useState(1);
  const [zoom, setZoom] = useState(1);

  // Copy the rendered diagram into the overlay and pick a starting zoom:
  // natural size for wide diagrams (scroll to pan), enlarged for small ones.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const clone = source.cloneNode(true) as SVGSVGElement;
    clone.removeAttribute("style");
    clone.removeAttribute("width");
    clone.removeAttribute("height");
    viewport.replaceChildren(clone);
    svgRef.current = clone;

    const fit = Math.min(
      (viewport.clientWidth - 48) / box.width,
      (viewport.clientHeight - 48) / box.height,
    );
    const start = Math.min(Math.max(fit, 1), 2);
    setFitZoom(start);
    setZoom(start);
  }, [source, box.width, box.height]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.setAttribute("width", String(box.width * zoom));
    svg.setAttribute("height", String(box.height * zoom));
  }, [zoom, box.width, box.height]);

  const zoomBy = useCallback((factor: number) => {
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z * factor)));
  }, []);

  // Keyboard shortcuts, focus, and page scroll lock while the overlay is open.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "+" || e.key === "=") zoomBy(ZOOM_STEP);
      else if (e.key === "-") zoomBy(1 / ZOOM_STEP);
      else if (e.key === "0") setZoom(fitZoom);
    };
    window.addEventListener("keydown", handler);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = overflow;
    };
  }, [onClose, zoomBy, fitZoom]);

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged diagram"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.toolButton}
          onClick={() => zoomBy(1 / ZOOM_STEP)}
          aria-label="Zoom out"
          title="Zoom out (-)"
        >
          <ZoomOut size={18} aria-hidden="true" />
        </button>
        <span className={styles.zoomLevel} aria-live="polite">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          className={styles.toolButton}
          onClick={() => zoomBy(ZOOM_STEP)}
          aria-label="Zoom in"
          title="Zoom in (+)"
        >
          <ZoomIn size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={styles.toolButton}
          onClick={() => setZoom(fitZoom)}
          aria-label="Reset zoom"
          title="Reset zoom (0)"
        >
          <RotateCcw size={18} aria-hidden="true" />
        </button>
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.toolButton}
          onClick={onClose}
          aria-label="Close enlarged diagram"
          title="Close (Esc)"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      <div
        className={styles.viewport}
        ref={viewportRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      />
    </div>,
    document.body,
  );
}
