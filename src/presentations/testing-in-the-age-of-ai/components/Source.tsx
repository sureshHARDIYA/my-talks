import { db } from "./theme";
import { FORRESTER_URL } from "./sources";

type Props = { children: string; href?: string };

/** Citation line for borrowed statistics and figures; links to the report by default. */
const Source = ({ children, href = FORRESTER_URL }: Props) => (
  <div style={{ marginTop: "0.6rem", fontSize: "0.72rem", color: db.muted, lineHeight: 1.4, fontStyle: "italic" }}>
    Source:{" "}
    <a href={href} target="_blank" rel="noreferrer" style={{ color: db.muted, textDecoration: "underline" }}>
      {children}
    </a>
  </div>
);

export default Source;
