import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const items = [
  {
    title: "New roles emerging",
    body: "AI/ML engineer · applied researcher · eval engineer · agent orchestration · AI safety & red-team.",
    color: "#0d6efd",
    icon: "🚀",
  },
  {
    title: "Old roles evolving",
    body: "Backend, frontend, data, DevOps — all still exist. AI fluency is now baseline, not a differentiator.",
    color: "#22c55e",
    icon: "🔧",
  },
  {
    title: "Smaller teams, bigger impact",
    body: "Two people with agents can ship what took twenty. Changes who gets funded and what gets built.",
    color: "#f59e0b",
    icon: "⚡",
  },
  {
    title: "Research ↔ industry gap closing",
    body: "Frontier labs hire PhDs directly into high-leverage work. Your thesis is market-relevant.",
    color: "#dc0000",
    icon: "🎓",
  },
];

const IndustryShift = () => {
  return (
    <Box padding="0.25rem 1.5rem">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "0.95rem",
        }}
      >
        {items.map((item, idx) => (
          <Appear key={item.title} priority={idx + 1}>
            <div
              style={{
                padding: "1rem 1.1rem",
                background: leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 10,
                borderLeft: `5px solid ${item.color}`,
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
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: item.color,
                  }}
                >
                  {item.title}
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: leroyTheme.grey80,
                  lineHeight: 1.5,
                }}
              >
                {item.body}
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </Box>
  );
};

export default IndustryShift;
