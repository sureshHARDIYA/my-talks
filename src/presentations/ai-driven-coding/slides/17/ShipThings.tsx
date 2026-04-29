import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const portfolio = [
  "GitHub portfolio with real, deployed projects",
  "Technical blog posts explaining what you learned",
  "Papers, arXiv preprints, reproducible code",
  "Open-source contributions to tools you use",
  "One small AI-powered tool you built end-to-end",
];

const ShipThings = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <Appear priority={1}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.4rem",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#f59e0b",
            }}
          >
            03
          </span>
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: leroyTheme.textBlue,
            }}
          >
            Ship things
          </div>
        </div>
      </Appear>

      <Appear priority={2}>
        <div
          style={{
            color: leroyTheme.grey60,
            fontSize: "1rem",
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          Your portfolio is proof you can translate research into reality.
        </div>
      </Appear>

      <div style={{ display: "grid", gap: "0.5rem" }}>
        {portfolio.map((item, idx) => (
          <Appear key={item} priority={idx + 3}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                background: idx % 2 === 0 ? leroyTheme.grey0 : leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#f59e0b",
                  color: leroyTheme.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: leroyTheme.grey80,
                }}
              >
                {item}
              </div>
            </div>
          </Appear>
        ))}
      </div>

      <Appear priority={portfolio.length + 3}>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.85rem 1rem",
            background: "#fef3c7",
            border: "2px solid #f59e0b",
            borderRadius: 8,
            textAlign: "center",
            color: "#92400e",
            fontSize: "0.95rem",
            fontWeight: 700,
          }}
        >
          The people who get hired are the ones who've already done the thing.
        </div>
      </Appear>
    </Box>
  );
};

export default ShipThings;
