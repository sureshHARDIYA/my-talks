import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const Card = ({
  title,
  detail,
  color,
  background,
}: {
  title: string;
  detail: string;
  color: string;
  background?: string;
}) => (
  <div
    style={{
      padding: "0.75rem 0.85rem",
      background: background ?? leroyTheme.white,
      border: `2px solid ${color}`,
      borderRadius: 8,
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "0.85rem",
        fontWeight: 800,
        color,
        letterSpacing: "0.04em",
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontSize: "0.75rem",
        color: leroyTheme.grey80,
        marginTop: "0.25rem",
      }}
    >
      {detail}
    </div>
  </div>
);

const DependencyGuardianFlow2 = () => {
  return (
    <Box padding="0.25rem 1.25rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#16a34a",
            marginBottom: "0.5rem",
          }}
        >
          AGENT 01 · APPROVAL FLOW
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.25rem",
          alignItems: "start",
        }}
      >
        {/* Approved path */}
        <Appear priority={2}>
          <div
            style={{
              padding: "0.85rem",
              background: "#f0fdf4",
              border: "1px solid #22c55e",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#16a34a",
                marginBottom: "0.65rem",
              }}
            >
              ✓ ON APPROVAL
            </div>

            <div style={{ display: "grid", gap: "0.4rem" }}>
              <Card
                title="MERGE & BUILD"
                detail="Verify status"
                color="#22c55e"
              />
              <div
                style={{ textAlign: "center", color: "#22c55e", fontSize: 14 }}
              >
                ↓
              </div>
              <Card title="E2E TESTS" detail="Full suite" color="#16a34a" />
              <div
                style={{ textAlign: "center", color: "#16a34a", fontSize: 14 }}
              >
                ↓
              </div>
              <Card
                title="PASSED"
                detail="Safe to ship"
                color="#15803d"
                background="#dcfce7"
              />
            </div>
          </div>
        </Appear>

        {/* Not approved path */}
        <Appear priority={3}>
          <div
            style={{
              padding: "0.85rem",
              background: "#fef2f2",
              border: "1px solid #dc2626",
              borderRadius: 10,
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#dc2626",
                marginBottom: "0.65rem",
              }}
            >
              ✗ NOT APPROVED
            </div>

            <div style={{ display: "grid", gap: "0.4rem" }}>
              <Card
                title="ALERT TEAMS"
                detail="Fast feedback"
                color="#dc2626"
              />
              <div
                style={{ textAlign: "center", color: "#dc2626", fontSize: 14 }}
              >
                ↓
              </div>
              <Card
                title="SUGGEST FIX"
                detail="Agent-proposed diff"
                color="#ef4444"
              />
              <div
                style={{ textAlign: "center", color: "#ef4444", fontSize: 14 }}
              >
                ↓
              </div>
              <Card
                title="UPDATE PR"
                detail="Re-submit · loop back to approval"
                color="#f97316"
                background="#fff7ed"
              />
            </div>
          </div>
        </Appear>
      </div>

      <Appear priority={4}>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1rem",
            background: leroyTheme.linkBlue,
            color: leroyTheme.white,
            borderRadius: 8,
            textAlign: "center",
            fontSize: "0.95rem",
            fontWeight: 600,
          }}
        >
          Discard fix · Manual verification · Back to approval — humans stay in
          the loop on judgment calls.
        </div>
      </Appear>
    </Box>
  );
};

export default DependencyGuardianFlow2;
