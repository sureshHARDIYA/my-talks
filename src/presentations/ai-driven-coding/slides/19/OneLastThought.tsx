import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const OneLastThought = () => {
  return (
    <Box padding="1rem 2rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: leroyTheme.grey60,
            marginBottom: "1rem",
          }}
        >
          ONE LAST THOUGHT
        </div>
      </Appear>

      <Appear priority={2}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: 800,
            color: leroyTheme.textBlue,
            marginBottom: "0.5rem",
          }}
        >
          AI <span style={{ color: "#dc0000" }}>(can't / won't)</span> take your
          job.
        </div>
      </Appear>

      <Appear priority={3}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: leroyTheme.grey80,
            marginBottom: "1.25rem",
            lineHeight: 1.4,
          }}
        >
          Someone using AI better than you might —
          <br />
          but you have every advantage to be that person.
        </div>
      </Appear>

      <Appear priority={4}>
        <div
          style={{
            padding: "1.25rem 1.5rem",
            background: "#eff6ff",
            border: `2px solid ${leroyTheme.linkBlue}`,
            borderRadius: 12,
            textAlign: "center",
            fontSize: "1.1rem",
            color: leroyTheme.textBlue,
            fontStyle: "italic",
            lineHeight: 1.5,
            maxWidth: 850,
            margin: "0 auto 1.25rem",
          }}
        >
          The best time to enter software was 20 years ago.
          <br />
          The second-best time is right now.
        </div>
      </Appear>

      <Appear priority={5}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: leroyTheme.linkBlue,
          }}
        >
          Thank you.
        </div>
      </Appear>
    </Box>
  );
};

export default OneLastThought;
