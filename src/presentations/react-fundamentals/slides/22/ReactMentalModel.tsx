import { Appear } from "spectacle";
import { leroyTheme } from "@/theme/leroy";

const headingBoxStyle = {
  display: "block" as const,
  width: "100%",
  maxWidth: 560,
  margin: "0 auto",
  padding: "0.75rem 1.25rem",
  border: `2px solid ${leroyTheme.grey20}`,
  borderRadius: 10,
  background: leroyTheme.grey0,
  textAlign: "center" as const,
};

/**
 * Title comes from TrygSlide ("React's Mental Model"). Headings in boxes, formula styled.
 */
const ReactMentalModel = () => {
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
      {/* Section 1: React thinks like this */}
      <Appear priority={1}>
        <div style={headingBoxStyle}>
          <p-heading tag="h2" size="medium" style={{ color: leroyTheme.grey80, margin: 0 }}>
            🧠 React thinks like this:
          </p-heading>
        </div>
      </Appear>
      <Appear priority={2}>
        <div style={{ fontSize: "1.1rem", fontWeight: 600, color: leroyTheme.linkBlue, lineHeight: 1.5, fontStyle: "italic" }}>
          "Given the same state, this component must always render the same UI."
        </div>
      </Appear>
      <Appear priority={3}>
        <div style={{ fontSize: "1rem", color: leroyTheme.black }}>
          If state changes → React asks: <strong style={{ color: leroyTheme.linkBlue }}>"What is the UI now?"</strong>
        </div>
      </Appear>

      {/* Section 2: The Correct Way to Think + formula */}
      <Appear priority={4}>
        <div style={{ ...headingBoxStyle, marginTop: "0.5rem" }}>
          <p-heading tag="h2" size="medium" style={{ color: leroyTheme.grey80, margin: 0 }}>
            🧠 The Correct Way to Think
          </p-heading>
        </div>
      </Appear>
      <Appear priority={5}>
        <div style={{ fontSize: "1rem", color: leroyTheme.black, marginBottom: "0.5rem" }}>
          React is a calculator:
        </div>
      </Appear>
      <Appear priority={6}>
        <div
          style={{
            display: "inline-block",
            padding: "1rem 1.75rem",
            border: `2px solid ${leroyTheme.linkBlue}`,
            borderRadius: 12,
            background: leroyTheme.grey0,
            fontFamily: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: leroyTheme.linkBlue,
            letterSpacing: "0.02em",
          }}
        >
          UI = f(state, props)
        </div>
      </Appear>
    </div>
  );
};

export default ReactMentalModel;
