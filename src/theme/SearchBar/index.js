import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "@docusaurus/router";
import styles from "./styles.module.css";
let pagefindInstance = null;
async function getPagefind() {
    if (pagefindInstance)
        return pagefindInstance;
    try {
        const pf = await import(
        /* webpackIgnore: true */ "/pagefind/pagefind.js");
        await pf.init?.();
        pagefindInstance = pf;
        return pagefindInstance;
    }
    catch {
        return null;
    }
}
export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const history = useHistory();
    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const closeModal = useCallback(() => {
        setIsOpen(false);
        setQuery("");
        setResults([]);
    }, []);
    // Keyboard shortcut: Ctrl+K / Cmd+K
    useEffect(() => {
        const handler = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === "Escape") {
                closeModal();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [closeModal]);
    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);
    // Search when query changes
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        let cancelled = false;
        setIsLoading(true);
        getPagefind().then(async (pf) => {
            if (!pf || cancelled) {
                setIsLoading(false);
                return;
            }
            const { results: rawResults } = await pf.search(query);
            const top = rawResults.slice(0, 8);
            const data = await Promise.all(top.map((r) => r.data()));
            if (!cancelled) {
                setResults(data);
                setIsLoading(false);
            }
        });
        return () => {
            cancelled = true;
        };
    }, [query]);
    const handleResultClick = (url) => {
        closeModal();
        history.push(url);
    };
    return (<>
      <button className={styles.searchButton} onClick={openModal} aria-label="Search">
        <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span className={styles.searchLabel}>Search</span>
        <kbd className={styles.searchKbd}>⌘K</kbd>
      </button>

      {isOpen && (<div className={styles.overlay} onClick={(e) => {
                if (e.target === e.currentTarget)
                    closeModal();
            }} role="dialog" aria-modal="true" aria-label="Search">
          <div className={styles.modal}>
            <div className={styles.inputWrapper}>
              <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input ref={inputRef} className={styles.input} type="search" placeholder="Search documentation..." value={query} onChange={(e) => setQuery(e.target.value)} autoComplete="off" spellCheck={false}/>
              <button className={styles.closeButton} onClick={closeModal} aria-label="Close search">
                <kbd>Esc</kbd>
              </button>
            </div>

            <div className={styles.results}>
              {isLoading && (<div className={styles.statusMessage}>Searching...</div>)}
              {!isLoading && query && results.length === 0 && (<div className={styles.statusMessage}>
                  No results for &ldquo;{query}&rdquo;
                </div>)}
              {!isLoading && !query && (<div className={styles.statusMessage}>
                  Type to search the documentation
                </div>)}
              {results.map((result, i) => (<button key={i} className={styles.result} onClick={() => handleResultClick(result.url)}>
                  <div className={styles.resultTitle}>{result.title}</div>
                  <div className={styles.resultExcerpt} 
            // pagefind wraps matches in <mark> tags
            dangerouslySetInnerHTML={{ __html: result.excerpt }}/>
                </button>))}
            </div>
          </div>
        </div>)}
    </>);
}
