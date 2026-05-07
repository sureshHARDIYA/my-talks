import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const buckets = [
  {
    id: "01",
    title: "BUILD AI FLUENCY",
    color: "#0d6efd",
  },
  {
    id: "02",
    title: "DOUBLE DOWN ON WHAT AGENTS CAN'T DO",
    color: "#22c55e",
  },
  {
    id: "03",
    title: "SHIP THINGS",
    color: "#f59e0b",
  },
];

const PhdBucketsIntro = () => {
  return (
    <Box padding="0.5rem 2rem">
      <Appear priority={0}>
        <div
          style={{
            textAlign: "center",
            color: leroyTheme.grey60,
            fontSize: "1rem",
            fontStyle: "italic",
            marginBottom: "1.5rem",
          }}
        >
          Three buckets. Each one compounds with your PhD.
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1rem",
        }}
      >
        {buckets.map((b, idx) => (
          <Appear key={b.id} priority={idx + 4}>
            <div
              style={{
                padding: "1.5rem 1rem",
                background: leroyTheme.white,
                border: `2px solid ${b.color}`,
                borderRadius: 12,
                textAlign: "center",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: b.color,
                  marginBottom: "0.5rem",
                }}
              >
                {b.id}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: leroyTheme.textBlue,
                  letterSpacing: "0.04em",
                  lineHeight: 1.35,
                }}
              >
                {b.title}
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </Box>
  );
};

export default PhdBucketsIntro;
