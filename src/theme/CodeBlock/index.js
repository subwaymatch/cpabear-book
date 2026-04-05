import React, { isValidElement } from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import ElementContent from "@theme/CodeBlock/Content/Element";
import StringContent from "@theme/CodeBlock/Content/String";
import JournalEntry from "@site/src/components/JournalEntry";
/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */
function maybeStringifyChildren(children) {
    if (React.Children.toArray(children).some((el) => isValidElement(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join("") : children;
}
export default function CodeBlock({ children: rawChildren, ...props }) {
    const { className } = props;
    const children = maybeStringifyChildren(rawChildren);
    const language = className?.replace(/language-/, "");
    if (typeof children === "string") {
        // Inside this block, TypeScript now knows `children` is a `string`.
        // Now, we can safely check the language.
        if (language === "journal" || language === "{journal}") {
            // No more error!
            return <JournalEntry code={children}/>;
        }
    }
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = useIsBrowser();
    const CodeBlockComp = typeof children === "string" ? StringContent : ElementContent;
    return (<CodeBlockComp key={String(isBrowser)} {...props}>
      {children}
    </CodeBlockComp>);
}
