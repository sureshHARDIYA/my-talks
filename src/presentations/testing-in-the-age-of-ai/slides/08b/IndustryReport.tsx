import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import Serif from "../../components/Serif";
import Figure from "../../components/Figure";
import Bridge from "../../components/Bridge";
import fig5 from "../../assets/forrester-fig5.png";

const FORRESTER = "Forrester Consulting, Testing In The Age Of AI, commissioned by Worksoft, June 2026. Survey of 405 decision-makers.";

const stats = [
  { value: "28 %", text: "of testing is AI-augmented on average, and unevenly implemented", navy: true },
  { value: "8", text: "AI testing use cases per organisation on average, most still in pilot or limited production", navy: false },
  { value: "1 in 3", text: "say they lack the technical understanding to move from manual to automated testing", navy: false },
];

const IndustryReport = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "1.5rem", alignItems: "start" }}>
    <div style={{ display: "grid", gap: "0.7rem" }}>
      {stats.map((s, idx) => (
        <Appear key={s.value} priority={idx + 1}>
          <Panel tone={s.navy ? "navy" : "light"} style={{ height: "auto", padding: "0.85rem 1.1rem" }}>
            <Serif size="1.8rem" color={s.navy ? db.white : db.navy}>
              {s.value}
            </Serif>
            <div style={{ marginTop: "0.25rem", fontSize: "0.9rem", lineHeight: 1.45, color: s.navy ? db.onNavyMuted : db.ink }}>{s.text}</div>
          </Panel>
        </Appear>
      ))}
    </div>

    <div>
      <Appear priority={4}>
        <Label>Heavier AI adoption, more reported consequences</Label>
        <Figure src={fig5} alt="Consequences experienced from challenges integrating AI-augmented testing, high versus low adopters" source={FORRESTER} maxWidth={820} />
      </Appear>
      <Appear priority={5}>
        <Bridge>So what does AI actually change for us?</Bridge>
      </Appear>
    </div>
  </div>
);

export default IndustryReport;
