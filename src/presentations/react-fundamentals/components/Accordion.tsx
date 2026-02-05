import { useState } from "react";
import { leroyTheme } from "@/theme/leroy";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  /** Optional: allow multiple open (default false = single open). */
  allowMultiple?: boolean;
};

/**
 * Reusable accordion: collapsible sections. Used for Props / State etc.
 */
export function Accordion({ items, allowMultiple = false }: Props) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="w-full" style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden" }}>
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full text-left flex items-center justify-between gap-2"
            style={{
              padding: "0.75rem 1.25rem",
              background: open.has(index) ? leroyTheme.grey10 : leroyTheme.grey0,
              borderBottom: index < items.length - 1 ? `1px solid ${leroyTheme.grey20}` : "none",
              color: leroyTheme.grey80,
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            <span>{item.title}</span>
            <span style={{ transform: open.has(index) ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
              ▼
            </span>
          </button>
          {open.has(index) && (
            <div
              style={{
                padding: "1rem 1.25rem",
                background: leroyTheme.grey0,
                borderBottom: index < items.length - 1 ? `1px solid ${leroyTheme.grey20}` : "none",
                fontSize: "0.9rem",
                color: leroyTheme.black,
                lineHeight: 1.5,
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
