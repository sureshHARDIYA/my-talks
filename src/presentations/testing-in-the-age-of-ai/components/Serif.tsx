import type { ReactNode } from "react";

import { db } from "./theme";

type Props = { children: ReactNode; size?: string; color?: string; align?: "left" | "center" };

/** Serif display text for statements and stats. */
const Serif = ({ children, size = "1.5rem", color = db.navy, align = "left" }: Props) => (
  <div
    style={{
      fontFamily: db.serif,
      fontSize: size,
      fontWeight: 700,
      color,
      lineHeight: 1.25,
      textAlign: align,
    }}
  >
    {children}
  </div>
);

export default Serif;
