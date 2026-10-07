import type { CSSProperties, ReactNode } from "react";

import { db } from "./theme";

type Props = { children: ReactNode; maxWidth?: number; style?: CSSProperties };

/** White framed canvas for animated figures, matching the former GIF panels. */
const Frame = ({ children, maxWidth = 760, style }: Props) => (
  <div
    style={{
      maxWidth,
      margin: "0 auto",
      borderRadius: 10,
      border: `1px solid ${db.line}`,
      background: db.white,
      padding: "1rem 1.2rem",
      fontFamily: db.sans,
      boxSizing: "border-box",
      ...style,
    }}
  >
    {children}
  </div>
);

export default Frame;
