import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const useDaily = [
  "Claude, Cursor, Copilot — pick one & go deep",
  "Integrate them into your research workflow",
  "Learn where they excel — and where they fail",
];

const understandWhy = [
  "Read the papers: transformers, RLHF, scaling",
  "Follow agent & tool-use literature",
  "Build one small agent yourself",
];

const AiFluency = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <Appear priority={1}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#0d6efd",
            }}
          >
            01
          </span>
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: leroyTheme.textBlue,
                lineHeight: 1.1,
              }}
            >
              Build AI fluency,
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#0d6efd",
                lineHeight: 1.1,
              }}
            >
              not AI dependency
            </div>
          </div>
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <Appear priority={2}>
          <div
            style={{
              padding: "1rem 1.1rem",
              background: "#eef4ff",
              border: "2px solid #0d6efd",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#0d6efd",
                letterSpacing: "0.06em",
                marginBottom: "0.6rem",
              }}
            >
              USE THE TOOLS DAILY
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                color: leroyTheme.grey80,
                fontSize: "0.95rem",
                lineHeight: 1.55,
              }}
            >
              {useDaily.map((s) => (
                <li key={s} style={{ marginBottom: 4 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Appear>

        <Appear priority={3}>
          <div
            style={{
              padding: "1rem 1.1rem",
              background: leroyTheme.grey0,
              border: `2px solid ${leroyTheme.linkBlue}`,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: leroyTheme.linkBlue,
                letterSpacing: "0.06em",
                marginBottom: "0.6rem",
              }}
            >
              UNDERSTAND THE WHY
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                color: leroyTheme.grey80,
                fontSize: "0.95rem",
                lineHeight: 1.55,
              }}
            >
              {understandWhy.map((s) => (
                <li key={s} style={{ marginBottom: 4 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Appear>
      </div>
    </Box>
  );
};

export default AiFluency;
