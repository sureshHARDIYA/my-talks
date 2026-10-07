import { db } from "./theme";

/** Italic small note at the bottom of a slide. */
const Footnote = ({ children }: { children: string }) => (
  <div
    style={{
      marginTop: "1rem",
      fontSize: "0.78rem",
      fontStyle: "italic",
      color: db.muted,
    }}
  >
    {children}
  </div>
);

export default Footnote;
