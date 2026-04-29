import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const items = [
  {
    title: "Writing great specs",
    body: "Our Feature Agent is only as good as the acceptance criteria it gets. Clear thinking is the new bottleneck.",
    color: "#0d6efd",
  },
  {
    title: "System design & judgment",
    body: "Architecture, trade-offs, failure modes — taste still matters.",
    color: "#22c55e",
  },
  {
    title: "Research rigor",
    body: "Formulating problems. Designing evals. Reading results. This IS your PhD.",
    color: "#f59e0b",
  },
  {
    title: "Domain expertise",
    body: "Your PhD subject is your moat. Depth in a field agents can't bluff through.",
    color: "#dc0000",
  },
  {
    title: "Communication",
    body: "AI amplifies good thinkers. Writing, storytelling, teaching — these compound.",
    color: "#8b5cf6",
  },
];

const WhatAgentsCantDo = () => {
  return (
    <Box padding="0.25rem 1.5rem">
      <Appear priority={1}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.85rem",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#22c55e",
            }}
          >
            02
          </span>
          <div
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: leroyTheme.textBlue,
              lineHeight: 1.15,
            }}
          >
            Double down on what agents can't replicate
          </div>
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.65rem",
        }}
      >
        {items.map((item, idx) => (
          <Appear key={item.title} priority={idx + 2}>
            <div
              style={{
                padding: "0.75rem 0.85rem",
                background: leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 8,
                borderLeft: `4px solid ${item.color}`,
              }}
            >
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: item.color,
                  marginBottom: "0.25rem",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: leroyTheme.grey80,
                  lineHeight: 1.45,
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

export default WhatAgentsCantDo;
