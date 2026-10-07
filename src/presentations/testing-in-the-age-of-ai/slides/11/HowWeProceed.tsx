import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import NumberBadge from "../../components/NumberBadge";
import Bridge from "../../components/Bridge";
import Serif from "../../components/Serif";

const steps = [
  { n: "1", when: "This sprint", title: "Write the journey list", detail: "Per application: the five to ten journeys we cannot afford to break. One page, reviewed by the team." },
  { n: "2", when: "Next sprint", title: "Correctness before code", detail: "Every agent task starts with what must be true and what can seriously fail. Tests follow from that, not from the diff." },
  { n: "3", when: "This quarter", title: "A small Playwright suite", detail: "Critical journeys only. Run before release by a person first, then with a test identity in Entra so CI can run it unattended." },
];

const HowWeProceed = () => (
  <div>
    <Label>Proposal, open for change</Label>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
      {steps.map((s, idx) => (
        <Appear key={s.n} priority={idx + 1}>
          <Panel>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
              <NumberBadge>{s.n}</NumberBadge>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: db.soft }}>{s.when}</span>
            </div>
            <Serif size="1.25rem">{s.title}</Serif>
            <div style={{ marginTop: "0.6rem", fontSize: "0.95rem", lineHeight: 1.5 }}>{s.detail}</div>
          </Panel>
        </Appear>
      ))}
    </div>

    <Appear priority={4}>
      <Panel tone="navy" style={{ height: "auto", marginTop: "1.1rem", padding: "0.9rem 1.25rem" }}>
        <div style={{ fontSize: "1.05rem", lineHeight: 1.5 }}>
          Measure one thing: releases that broke a listed journey. Not test count. Not coverage.
        </div>
      </Panel>
    </Appear>
    <Appear priority={5}>
      <Bridge>So where do we start?</Bridge>
    </Appear>
  </div>
);

export default HowWeProceed;
