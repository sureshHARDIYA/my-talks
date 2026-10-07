import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Panel from "../../components/Panel";
import NumberBadge from "../../components/NumberBadge";
import Serif from "../../components/Serif";
import Footnote from "../../components/Footnote";
import Bridge from "../../components/Bridge";

const layers = [
  { n: "1", name: "Unit Testing", question: "Does the piece work?", proves: "Isolated behaviour. Fast feedback. Many of them.", cost: "Cheap" },
  { n: "2", name: "Integration Testing", question: "Do the pieces work together?", proves: "Boundaries: API to database, service to service, contracts, persistence, configuration.", cost: "Moderate" },
  { n: "3", name: "End-to-End Testing", question: "Can the user do what matters?", proves: "The outcome from the user's perspective. Few of them.", cost: "Expensive" },
];

const ThreeQuestions = () => (
  <div>
    <div style={{ fontSize: "1.15rem", lineHeight: 1.5, color: db.muted, marginBottom: "1rem" }}>
      Confidence comes from answering three different questions, at three different costs.
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
      {layers.map((l, idx) => (
        <Appear key={l.n} priority={idx + 1}>
          <Panel>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
              <NumberBadge>{l.n}</NumberBadge>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: db.navy }}>{l.name}</span>
              <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: db.soft, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {l.cost}
              </span>
            </div>
            <Serif size="1.3rem">{l.question}</Serif>
            <div style={{ marginTop: "0.7rem", fontSize: "0.95rem", lineHeight: 1.5, color: db.ink }}>{l.proves}</div>
          </Panel>
        </Appear>
      ))}
    </div>

    <Appear priority={4}>
      <Panel tone="navy" style={{ height: "auto", marginTop: "1.1rem", padding: "0.9rem 1.25rem" }}>
        <div style={{ fontSize: "1.05rem", lineHeight: 1.5 }}>
          What matters is the user's outcome. Only one of these three questions asks about it.
        </div>
      </Panel>
    </Appear>
    <Appear priority={5}>
      <Footnote>The layers are not competing. They answer different questions, and only together do they give confidence.</Footnote>
    </Appear>
    <Appear priority={6}>
      <Bridge>So what is the user's outcome in Dokumentbanken?</Bridge>
    </Appear>
  </div>
);

export default ThreeQuestions;
