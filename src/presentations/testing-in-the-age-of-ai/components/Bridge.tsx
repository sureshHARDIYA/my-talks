import type { ReactNode } from "react";

import { db } from "./theme";

/** Closing line of a slide: the question the next slide answers. */
const Bridge = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      marginTop: "1.1rem",
      fontFamily: db.serif,
      fontSize: "1.2rem",
      fontWeight: 700,
      color: db.navy,
      textAlign: "left",
    }}
  >
    {children}
  </div>
);

export default Bridge;
