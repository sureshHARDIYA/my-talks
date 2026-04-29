import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const waves = [
  {
    id: "01",
    period: "2021–2023",
    name: "ASSISTANCE",
    role: "Human drives",
    body: "Autocomplete, inline suggestions. Copilot appears. The IDE gets smarter.",
    color: "#94a3b8",
  },
  {
    id: "02",
    period: "2023–2025",
    name: "COLLABORATION",
    role: "Human directs",
    body: "Chat-based coding. Multi-file edits. Claude, Cursor, Copilot Chat. The pair programmer.",
    color: "#94a3b8",
  },
  {
    id: "03",
    period: "2025 →",
    name: "AUTONOMY",
    role: "Human architects",
    body: "Long-running agents. Self-healing pipelines. PRs opened, tests run, bugs fixed — unattended.",
    color: "#94a3b8",
  },
];

const ThreeWaves = () => {
  return (
    <Box padding="0.25rem 1.5rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            color: leroyTheme.grey60,
            fontSize: "0.95rem",
            marginBottom: "1rem",
          }}
        >
          Each wave didn't replace engineers — it changed what they do.
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "0.85rem",
        }}
      >
        {waves.map((w, idx) => (
          <Appear key={w.id} priority={idx + 2}>
            <div
              style={{
                padding: "1rem",
                background: leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 10,
                borderTop: `5px solid ${w.color}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: w.color,
                  }}
                >
                  {w.id}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: leroyTheme.grey60,
                    background: leroyTheme.grey10,
                    padding: "2px 8px",
                    borderRadius: 999,
                    fontWeight: 600,
                  }}
                >
                  {w.period}
                </span>
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: leroyTheme.textBlue,
                  letterSpacing: "0.04em",
                }}
              >
                {w.name}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                  color: w.color,
                  marginBottom: "0.5rem",
                }}
              >
                {w.role}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: leroyTheme.grey80,
                  lineHeight: 1.45,
                }}
              >
                {w.body}
              </div>
            </div>
          </Appear>
        ))}
      </div>

      <Appear priority={5}>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.85rem 1rem",
            background: "#e2e7ee",
            border: "2px solid #94a3b8",
            borderRadius: 8,
            textAlign: "center",
            color: "#000000",
            fontSize: "0.95rem",
            fontWeight: 600,
          }}
        >
          Wave 3 isn't hypothetical. Let me show you two agents we run in
          production today.
        </div>
      </Appear>
    </Box>
  );
};

export default ThreeWaves;
