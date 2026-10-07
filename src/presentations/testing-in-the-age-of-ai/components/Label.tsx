import { db } from "./theme";

/** Small uppercase, letter-spaced label above a block. */
const Label = ({ children, onNavy = false }: { children: string; onNavy?: boolean }) => (
  <div
    style={{
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: onNavy ? db.onNavyMuted : db.soft,
      marginBottom: "0.45rem",
    }}
  >
    {children}
  </div>
);

export default Label;
