import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

interface Dimension {
  index: string;
  keyword: string;
  rest: string;
  body: string;
  accent: string;
}

const dimensions: Dimension[] = [
  {
    index: "01",
    keyword: "HOW",
    rest: "code gets written",
    body: "From autocomplete → chat-based coding → agents that ship entire features.",
    accent: "#1e3a8a",
  },
  {
    index: "02",
    keyword: "WHO",
    rest: "writes it",
    body: "Non-developers shipping real software. The PM/engineer line is blurring.",
    accent: "#0f766e",
  },
  {
    index: "03",
    keyword: "HOW",
    rest: "teams are built",
    body: "Smaller teams. Higher leverage per engineer. Faster prototype-to-production.",
    accent: "#b45309",
  },
  {
    index: "04",
    keyword: "WHAT",
    rest: "gets valued",
    body: "Syntax is easy to generate. Judgment, taste, and verification are premium.",
    accent: "#991b1b",
  },
];

const WhatChanged = () => {
  return (
    <Box padding="0.25rem 1.5rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            color: leroyTheme.grey60,
            fontSize: "0.95rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "1.25rem",
          }}
        >
          Four dimensions, all shifting at once
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1rem",
        }}
      >
        {dimensions.map((d, idx) => (
          <Appear key={d.index} priority={idx + 2}>
            <article
              style={{
                position: "relative",
                padding: "1.1rem 1.25rem 1rem",
                background: leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 12,
                boxShadow:
                  "0 1px 0 rgba(15, 23, 42, 0.02), 0 8px 20px -12px rgba(15, 23, 42, 0.18)",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "44px",
                  height: "3px",
                  background: d.accent,
                }}
              />

              <header
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.65rem",
                  marginBottom: "0.6rem",
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "'SF Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: leroyTheme.grey40,
                  }}
                >
                  {d.index}
                </span>
                <span
                  aria-hidden
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: d.accent,
                    transform: "translateY(-2px)",
                  }}
                />
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                  }}
                >
                  <span style={{ color: d.accent }}>{d.keyword}</span>
                  <span
                    style={{
                      color: leroyTheme.grey60,
                      fontWeight: 500,
                      marginLeft: "0.4rem",
                    }}
                  >
                    {d.rest}
                  </span>
                </h3>
              </header>

              <div
                style={{
                  height: 1,
                  background: leroyTheme.grey10,
                  margin: "0 0 0.7rem",
                }}
              />

              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  color: leroyTheme.grey80,
                  lineHeight: 1.55,
                }}
              >
                {d.body}
              </p>
            </article>
          </Appear>
        ))}
      </div>
    </Box>
  );
};

export default WhatChanged;
