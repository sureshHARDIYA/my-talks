import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const Pill = ({
  title,
  detail,
  color,
}: {
  title: string;
  detail: string;
  color: string;
}) => (
  <div
    style={{
      padding: "0.55rem 0.6rem",
      background: leroyTheme.white,
      border: `2px solid ${color}`,
      borderRadius: 8,
      textAlign: "center",
      minHeight: 56,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        fontSize: "0.75rem",
        fontWeight: 800,
        color,
        letterSpacing: "0.03em",
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: "0.65rem",
        color: leroyTheme.grey60,
        marginTop: "0.15rem",
      }}
    >
      {detail}
    </div>
  </div>
);

const FeatureAgent = () => {
  return (
    <Box padding="0.25rem 1rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: leroyTheme.linkBlue,
            marginBottom: "0.25rem",
          }}
        >
          AGENT 02 · THE FEATURE AGENT
        </div>
      </Appear>

      <Appear priority={2}>
        <div
          style={{
            textAlign: "center",
            color: leroyTheme.grey60,
            fontSize: "0.85rem",
            fontStyle: "italic",
            marginBottom: "0.85rem",
          }}
        >
          Claude agent + Azure DevOps: from a task ID to a deployed feature.
        </div>
      </Appear>

      {/* Happy path */}
      <Appear priority={3}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: "0.4rem",
            marginBottom: "0.6rem",
          }}
        >
          <Pill
            title="HUMAN INPUT"
            detail="Task + acceptance criteria"
            color="#0d6efd"
          />
          <Pill title="READ FIGMA" detail="Design → code" color="#3b82f6" />
          <Pill
            title="WRITE CODE"
            detail="+ unit tests"
            color="#6366f1"
          />
          <Pill
            title="LINT & BUILD"
            detail="Format · compile"
            color="#8b5cf6"
          />
          <Pill title="OPEN PR" detail="Post to Teams" color="#a855f7" />
          <Pill title="MANUAL QA" detail="Human review" color="#d946ef" />
          <Pill title="MERGE → DEV" detail="Auto merge" color="#22c55e" />
          <Pill
            title="PUBLISH DEV"
            detail="Live environment"
            color="#16a34a"
          />
        </div>
      </Appear>

      {/* Failure loop */}
      <Appear priority={4}>
        <div
          style={{
            padding: "0.75rem",
            background: "#fef2f2",
            border: "1px dashed #dc2626",
            borderRadius: 10,
            marginBottom: "0.65rem",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#dc2626",
              marginBottom: "0.5rem",
              letterSpacing: "0.04em",
            }}
          >
            ON FAILURE — LOOP BACK
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.4rem",
            }}
          >
            <Pill
              title="ALERT TEAMS"
              detail="Context sent"
              color="#dc2626"
            />
            <Pill
              title="PROPOSE FIX"
              detail="Agent retries"
              color="#ef4444"
            />
            <Pill
              title="RE-ENTER LOOP"
              detail="Back to pipeline"
              color="#f97316"
            />
          </div>
        </div>
      </Appear>

      <Appear priority={5}>
        <div
          style={{
            padding: "0.75rem 1rem",
            background: leroyTheme.linkBlue,
            color: leroyTheme.white,
            borderRadius: 8,
            textAlign: "center",
            fontSize: "0.95rem",
            fontWeight: 600,
          }}
        >
          We changed what engineers spend their time on. Great specs and
          acceptance criteria are now the creative work — the agent handles the
          rest.
        </div>
      </Appear>
    </Box>
  );
};

export default FeatureAgent;
