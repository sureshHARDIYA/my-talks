import { Appear } from "spectacle";
import { leroyTheme } from "@/theme/leroy";

const headingBoxStyle = {
  display: "block" as const,
  width: "100%",
  maxWidth: 700,
  margin: "0 auto",
  padding: "0.75rem 1.25rem",
  border: `2px solid ${leroyTheme.grey20}`,
  borderRadius: 10,
  background: leroyTheme.grey0,
  textAlign: "center" as const,
};

const VirtualDomIntro = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
      }}
    >
      <Appear priority={1}>
        <div style={headingBoxStyle}>
          <p-heading tag="h2" size="large" style={{ color: leroyTheme.linkBlue, margin: 0 }}>
            How does React know what changed?
          </p-heading>
        </div>
      </Appear>

      <Appear priority={2}>
        <div style={headingBoxStyle}>
          <p-heading tag="h3" size="medium" style={{ color: leroyTheme.grey80, margin: 0 }}>
            🧩 React Uses a Virtual DOM (VDOM)
          </p-heading>
        </div>
      </Appear>

      <Appear priority={3}>
        <ul className="list-disc pl-6 text-left" style={{ fontSize: "1.1rem", color: leroyTheme.black, maxWidth: 700, margin: "1rem auto" }}>
          <li className="mb-3">
            A <strong style={{ color: leroyTheme.linkBlue }}>lightweight copy</strong> of the real DOM kept in memory
          </li>
          <li className="mb-3">
            React creates a new VDOM tree on <strong style={{ color: leroyTheme.linkBlue }}>every render</strong>
          </li>
          <li className="mb-3">
            Compares the new VDOM with the previous one
          </li>
          <li>
            Only the <strong style={{ color: leroyTheme.linkBlue }}>differences</strong> are applied to the real DOM
          </li>
        </ul>
      </Appear>

      <Appear priority={4}>
        <div style={{ fontSize: "1rem", color: leroyTheme.grey80, fontStyle: "italic", marginTop: "1rem" }}>
          This process is much faster than updating the entire real DOM!
        </div>
      </Appear>
    </div>
  );
};

export default VirtualDomIntro;
