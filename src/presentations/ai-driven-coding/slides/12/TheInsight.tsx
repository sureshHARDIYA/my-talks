import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const stillDo = [
  "Write clear specs & acceptance criteria",
  "Review judgment calls",
  "Approve architectural changes",
  "Define what 'good' means",
];

const noLongerDo = [
  "Write boilerplate",
  "Chase dependency updates",
  "Manually wire up pipelines",
  "Translate designs into scaffolding",
];

const TheInsight = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: leroyTheme.grey60,
            marginBottom: "0.4rem",
          }}
        >
          THE INSIGHT
        </div>
      </Appear>

      <Appear priority={2}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: leroyTheme.textBlue,
            marginBottom: "0.25rem",
          }}
        >
          The job didn't disappear.
        </div>
      </Appear>

      <Appear priority={3}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: leroyTheme.linkBlue,
            marginBottom: "1.25rem",
          }}
        >
          It moved up the stack.
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1rem",
        }}
      >
        <Appear priority={4}>
          <div
            style={{
              padding: "1rem 1.1rem",
              background: "#f0fdf4",
              border: "2px solid #22c55e",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "#16a34a",
                letterSpacing: "0.06em",
                marginBottom: "0.6rem",
              }}
            >
              ✓ WHAT HUMANS STILL DO
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
              {stillDo.map((s) => (
                <li key={s} style={{ marginBottom: 4 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Appear>

        <Appear priority={5}>
          <div
            style={{
              padding: "1rem 1.1rem",
              background: "#fef2f2",
              border: "2px solid #dc2626",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                color: "#dc2626",
                letterSpacing: "0.06em",
                marginBottom: "0.6rem",
              }}
            >
              ✗ WHAT THEY NO LONGER DO
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
              {noLongerDo.map((s) => (
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

export default TheInsight;
