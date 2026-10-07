import type { CSSProperties, ReactNode } from "react";

import { db } from "./theme";

type Props = {
  children: ReactNode;
  tone?: "light" | "navy" | "outline";
  style?: CSSProperties;
};

/** Rounded content panel. Light grey-blue by default, navy for emphasis. */
const Panel = ({ children, tone = "light", style }: Props) => {
  const base: CSSProperties = {
    borderRadius: 10,
    padding: "1.1rem 1.25rem",
    boxSizing: "border-box",
    height: "100%",
  };
  const tones: Record<string, CSSProperties> = {
    light: { background: db.panel, color: db.ink },
    navy: { background: db.navy, color: db.white },
    outline: { background: db.white, border: `1px solid ${db.line}`, color: db.ink },
  };
  return <div style={{ ...base, ...tones[tone], ...style }}>{children}</div>;
};

export default Panel;
