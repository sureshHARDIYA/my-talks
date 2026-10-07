import type { ReactNode } from "react";
import { Slide } from "spectacle";

import { db } from "./theme";
import NumberBadge from "./NumberBadge";

type Props = {
  children: ReactNode;
  title?: string;
  number?: string;
  dark?: boolean;
};

/** White slide, serif title top-left with an optional numbered circle, as in the PowerPoint master. */
const DbSlide = ({ children, title, number, dark = false }: Props) => (
  <Slide backgroundColor={dark ? db.navy : db.white} padding="0">
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "1.8rem 2.4rem 2.2rem",
        fontFamily: db.sans,
        zoom: 1.3,
        color: dark ? db.white : db.ink,
        boxSizing: "border-box",
      }}
    >
      {title && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.9rem",
            marginBottom: "1.4rem",
          }}
        >
          {number && <NumberBadge size={40}>{number}</NumberBadge>}
          <h1
            style={{
              margin: 0,
              fontFamily: db.serif,
              fontSize: "2.1rem",
              fontWeight: 700,
              color: dark ? db.white : db.navy,
              lineHeight: 1.15,
            }}
          >
            {title}
          </h1>
        </div>
      )}
      <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  </Slide>
);

export default DbSlide;
