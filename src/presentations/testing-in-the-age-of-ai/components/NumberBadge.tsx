import { db } from "./theme";

type Props = { children: string; size?: number; light?: boolean };

/** Navy circle with a white digit or letter. */
const NumberBadge = ({ children, size = 34, light = false }: Props) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "50%",
      background: light ? db.white : db.navy,
      color: light ? db.navy : db.white,
      fontFamily: db.serif,
      fontWeight: 700,
      fontSize: size * 0.46,
      flexShrink: 0,
    }}
  >
    {children}
  </span>
);

export default NumberBadge;
