import { ReactNode, useEffect } from "react";

import leroyLogo from "@/assets/leroy-logo.svg";

type Props = {
  children: ReactNode;
  title?: string;
};

/**
 * Lerøy-specific document head tweaks (favicon + title).
 * Scoped by usage: only affects routes that render this component.
 */
const LeroyHead = ({ children, title }: Props) => {
  useEffect(() => {
    const previousTitle = document.title;

    const head = document.head;
    const iconSelectors = [
      'link[rel="icon"]',
      'link[rel="shortcut icon"]',
      'link[rel="apple-touch-icon"]',
      'link[rel="mask-icon"]',
      'link[rel*="icon"]',
    ];

    const existing = Array.from(
      head.querySelectorAll<HTMLLinkElement>(iconSelectors.join(","))
    );
    const clones = existing.map((n) => n.cloneNode(true) as HTMLLinkElement);

    existing.forEach((n) => n.remove());

    const leroyIcon = document.createElement("link");
    leroyIcon.setAttribute("data-leroy-favicon", "true");
    leroyIcon.rel = "icon";
    leroyIcon.type = "image/svg+xml";
    leroyIcon.href = leroyLogo;
    head.appendChild(leroyIcon);

    if (title) document.title = title;

    return () => {
      const added = head.querySelectorAll<HTMLLinkElement>(
        'link[data-leroy-favicon="true"]'
      );
      added.forEach((n) => n.remove());

      // restore what existed before
      clones.forEach((n) => head.appendChild(n));

      document.title = previousTitle;
    };
  }, [title]);

  return <>{children}</>;
};

export default LeroyHead;

