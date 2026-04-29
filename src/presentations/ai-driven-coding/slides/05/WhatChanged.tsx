import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const dimensions = [
  {
    label: "HOW code gets written",
    body: "From autocomplete → chat-based coding → agents that ship entire features.",
    color: "#0d6efd",
    bg: "#eef4ff",
  },
  {
    label: "WHO writes it",
    body: "Non-developers shipping real software. The PM/engineer line is blurring.",
    color: "#22c55e",
    bg: "#f0fdf4",
  },
  {
    label: "HOW teams are built",
    body: "Smaller teams. Higher leverage per engineer. Faster prototype-to-production.",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    label: "WHAT gets valued",
    body: "Syntax is easy to generate. Judgment, taste, and verification are premium.",
    color: "#dc2626",
    bg: "#fef2f2",
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
            fontSize: "1rem",
            marginBottom: "1rem",
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
          <Appear key={d.label} priority={idx + 2}>
            <div
              style={{
                padding: "1rem 1.1rem",
                background: d.bg,
                border: `2px solid ${d.color}`,
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: d.color,
                  marginBottom: "0.5rem",
                  letterSpacing: "0.04em",
                }}
              >
                {d.label}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: leroyTheme.grey80,
                  lineHeight: 1.5,
                }}
              >
                {d.body}
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </Box>
  );
};

export default WhatChanged;
