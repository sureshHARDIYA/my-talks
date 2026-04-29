import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const ColumnCard = ({
  year,
  metric,
  caption,
  bullets,
  variant,
}: {
  year: string;
  metric: string;
  caption: string;
  bullets: string[];
  variant: "past" | "now";
}) => {
  const accent = variant === "past" ? leroyTheme.grey60 : leroyTheme.linkBlue;
  const background = variant === "past" ? leroyTheme.grey10 : "#eff6ff";

  return (
    <div
      style={{
        padding: "1rem 1.1rem",
        background,
        border: `2px solid ${accent}`,
        borderRadius: 12,
      }}
    >
      <div
        style={{
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: accent,
          textTransform: "uppercase",
        }}
      >
        {year}
      </div>
      <div
        style={{
          fontSize: "1.7rem",
          fontWeight: 800,
          color: accent,
          marginTop: "0.25rem",
        }}
      >
        {metric}
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          color: leroyTheme.grey80,
          marginTop: "0.4rem",
          lineHeight: 1.4,
        }}
      >
        {caption}
      </div>
      <ul
        style={{
          marginTop: "0.85rem",
          paddingLeft: "1.1rem",
          color: leroyTheme.grey80,
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        {bullets.map((b) => (
          <li key={b} style={{ marginBottom: 4 }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TheShift = () => {
  return (
    <Box padding="0.25rem 1.5rem">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "1rem",
          alignItems: "stretch",
        }}
      >
        <Appear priority={1}>
          <ColumnCard
            year="2021"
            metric="~100 lines/day"
            caption="A senior engineer shipping production code, writing everything by hand."
            bullets={[
              "IDE autocomplete",
              "Stack Overflow + docs",
              "Manual test writing",
              "Documentation",
            ]}
            variant="past"
          />
        </Appear>

        <Appear priority={2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              color: leroyTheme.linkBlue,
              fontWeight: 800,
            }}
          >
            →
          </div>
        </Appear>

        <Appear priority={3}>
          <ColumnCard
            year="2026"
            metric="10× leverage"
            caption="The same engineer, now directing agents that write, test, and ship code."
            bullets={[
              "Agentic coding (Claude, Cursor)",
              "Autonomous PR pipelines",
              "AI-generated tests & fixes",
              "Documentation",
            ]}
            variant="now"
          />
        </Appear>
      </div>

      <Appear priority={4}>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.85rem 1rem",
            background: leroyTheme.linkBlue,
            color: leroyTheme.white,
            borderRadius: 8,
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          You are entering software at its biggest inflection point since the
          move to cloud.
        </div>
      </Appear>
    </Box>
  );
};

export default TheShift;
