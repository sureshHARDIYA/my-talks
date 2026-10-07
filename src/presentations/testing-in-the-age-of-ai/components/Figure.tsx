import { db } from "./theme";
import Source from "./Source";

type Props = { src: string; alt: string; source: string; maxWidth?: number };

/** A clipped figure from a report, framed and credited. */
const Figure = ({ src, alt, source, maxWidth = 760 }: Props) => (
  <div style={{ maxWidth }}>
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block", borderRadius: 8, border: `1px solid ${db.line}`, padding: "0.6rem", boxSizing: "border-box", background: db.white }}
    />
    <Source>{source}</Source>
  </div>
);

export default Figure;
