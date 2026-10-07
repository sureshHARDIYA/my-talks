import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import Serif from "../../components/Serif";
import AiFlood from "../../components/AiFlood";

const shifts = [
  { label: "Writing code", value: "Cheaper", navy: false },
  { label: "Generating tests", value: "Cheaper", navy: false },
  { label: "Defining correctness", value: "More valuable", navy: true },
];

const AiChangesEquation = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "1.5rem", alignItems: "start" }}>
    <div style={{ display: "grid", gap: "0.7rem" }}>
      {shifts.map((s, idx) => (
        <Appear key={s.label} priority={idx + 1}>
          <Panel tone={s.navy ? "navy" : "light"} style={{ height: "auto", padding: "0.85rem 1.1rem" }}>
            <Label onNavy={s.navy}>{s.label}</Label>
            <Serif size="1.5rem" color={s.navy ? db.white : db.navy}>
              {s.value}
            </Serif>
          </Panel>
        </Appear>
      ))}
    </div>

    <div>
      <Appear priority={4}>
        <AiFlood />
      </Appear>
      <Appear priority={5}>
        <div style={{ marginTop: "1rem" }}>
          <Label>The question that must come first</Label>
          <Serif size="1.35rem">What must be true for us to call this change correct?</Serif>
          <div style={{ marginTop: "0.5rem", fontSize: "1rem", color: db.muted }}>If that is the question, what does a workflow built around it look like?</div>
        </div>
      </Appear>
    </div>
  </div>
);

export default AiChangesEquation;
