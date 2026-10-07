import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import Serif from "../../components/Serif";
import NumberBadge from "../../components/NumberBadge";
import Source from "../../components/Source";
import Bridge from "../../components/Bridge";

const stages = [
  { n: "1", title: "Every push", detail: "Unit and integration tests in CI/CD. Fast, automated, already in place." },
  { n: "2", title: "Before release", detail: "The small Playwright suite for the critical journeys, against the test environment." },
  { n: "3", title: "Release", detail: "Evidence in hand, not a feeling." },
];

const WhereTestsRun = () => (
  <div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: "0.6rem", alignItems: "stretch" }}>
      {stages.map((s, idx) => (
        <div key={s.n} style={{ display: "contents" }}>
          <Appear priority={idx + 1}>
            <Panel>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.6rem" }}>
                <NumberBadge>{s.n}</NumberBadge>
                <span style={{ fontWeight: 700, fontSize: "1.05rem", color: db.navy }}>{s.title}</span>
              </div>
              <div style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{s.detail}</div>
            </Panel>
          </Appear>
          {idx < stages.length - 1 && (
            <Appear priority={idx + 1}>
              <div style={{ display: "flex", alignItems: "center", color: db.soft, fontSize: "1.4rem" }}>→</div>
            </Appear>
          )}
        </div>
      ))}
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1.1rem" }}>
      <Appear priority={4}>
        <Panel tone="outline">
          <Label>Today</Label>
          <div style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
            Users authenticate through Entra ID with MFA. A developer or tester signs in once and runs the suite before release.
          </div>
        </Panel>
      </Appear>
      <Appear priority={5}>
        <Panel tone="outline">
          <Label>Mature approach</Label>
          <div style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
            An approved, dedicated test identity and controlled Entra configuration, so the critical suite runs unattended in CI.
          </div>
        </Panel>
      </Appear>
    </div>

    <Appear priority={6}>
      <Panel tone="navy" style={{ height: "auto", marginTop: "1.1rem", padding: "0.9rem 1.25rem" }}>
        <Serif size="1.2rem" color={db.white}>
          MFA does not make end-to-end testing impossible. Identity becomes part of the test architecture.
        </Serif>
      </Panel>
    </Appear>
    <Appear priority={6}>
      <Source>European respondents name integrating testing into CI/CD pipelines as their top obstacle (36 %). Forrester Consulting for Worksoft, June 2026.</Source>
    </Appear>
    <Appear priority={7}>
      <Bridge>And when AI writes the code and the tests, what changes?</Bridge>
    </Appear>
  </div>
);

export default WhereTestsRun;
