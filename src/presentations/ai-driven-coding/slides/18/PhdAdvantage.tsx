import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const PhdAdvantage = () => {
  return (
    <Box padding="1rem 2rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: leroyTheme.grey60,
            marginBottom: "1rem",
          }}
        >
          YOUR PHD ADVANTAGE
        </div>
      </Appear>

      <Appear priority={2}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            color: leroyTheme.textBlue,
            marginBottom: "0.75rem",
            lineHeight: 1.35,
          }}
        >
          A PhD teaches you to{" "}
          <span style={{ fontWeight: 800, color: leroyTheme.linkBlue }}>
            formulate hard problems precisely.
          </span>
        </div>
      </Appear>

      <Appear priority={3}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.4rem",
            color: leroyTheme.textBlue,
            marginBottom: "1.5rem",
            lineHeight: 1.35,
          }}
        >
          That is exactly the skill that makes someone{" "}
          <span style={{ fontWeight: 800, color: "#dc0000" }}>
            10× more effective
          </span>{" "}
          with AI agents.
        </div>
      </Appear>

      <Appear priority={4}>
        <div
          style={{
            padding: "1.25rem 1.5rem",
            background: leroyTheme.linkBlue,
            color: leroyTheme.white,
            borderRadius: 14,
            textAlign: "center",
            fontSize: "1.05rem",
            fontWeight: 600,
            lineHeight: 1.55,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          Clear thinking{" "}
          <span style={{ color: "#fef3c7" }}>+</span> domain depth{" "}
          <span style={{ color: "#fef3c7" }}>+</span> shipping habits{" "}
          <span style={{ color: "#fef3c7" }}>=</span> you are the person
          companies are hiring.
        </div>
      </Appear>
    </Box>
  );
};

export default PhdAdvantage;
