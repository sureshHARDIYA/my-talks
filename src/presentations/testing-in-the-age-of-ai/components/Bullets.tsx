import { db } from "./theme";

const Bullets = ({ items, onNavy = false }: { items: string[]; onNavy?: boolean }) => (
  <ul
    style={{
      margin: 0,
      paddingLeft: "1.1rem",
      fontSize: "0.95rem",
      lineHeight: 1.5,
      color: onNavy ? db.white : db.ink,
    }}
  >
    {items.map((t) => (
      <li key={t} style={{ marginBottom: "0.3rem" }}>
        {t}
      </li>
    ))}
  </ul>
);

export default Bullets;
