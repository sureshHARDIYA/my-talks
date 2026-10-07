import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import Serif from "../../components/Serif";
import Bridge from "../../components/Bridge";

const items = [
  {
    title: "Write the journey list",
    detail: "Per application: the five to ten journeys we cannot afford to break. One page, reviewed by the team.",
    example: "Sign in, open an allowed report, be refused a restricted one, upload and find a document.",
  },
  {
    title: "Test behaviour, not code",
    detail: "Each journey gets a test that asserts what the user sees. Tests follow from what must be true, not from the diff.",
    example: "The report opens. The PDF is the right one. The refused user sees a clear message.",
  },
  {
    title: "Play the hostile user",
    detail: "For every input, try what it should refuse and watch how the system fails.",
    example: "Text in a number field, negative values, empty, too long, wrong date, wrong role.",
  },
  {
    title: "Break it yourself",
    detail: "Before release, the team spends one hour as a tiger team trying to break what it just built.",
    example: "Every finding becomes a journey on the list or a test in the suite.",
  },
];

const Checkbox = () => (
  <div style={{ width: 22, height: 22, borderRadius: 5, border: `2px solid ${db.navy}`, flexShrink: 0, marginTop: 3 }} />
);

const HowWeProceed = () => (
  <div>
    <Label>Checklist, open for change</Label>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.9rem" }}>
      {items.map((it, idx) => (
        <Appear key={it.title} priority={idx + 1}>
          <Panel style={{ padding: "0.9rem 1.1rem" }}>
            <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
              <Checkbox />
              <div>
                <Serif size="1.25rem">{it.title}</Serif>
                <div style={{ marginTop: "0.35rem", fontSize: "0.95rem", lineHeight: 1.45, color: db.ink }}>{it.detail}</div>
                <div style={{ marginTop: "0.4rem", fontSize: "0.85rem", lineHeight: 1.4, color: db.muted, fontStyle: "italic" }}>{it.example}</div>
              </div>
            </div>
          </Panel>
        </Appear>
      ))}
    </div>

    <Appear priority={5}>
      <Panel tone="navy" style={{ height: "auto", marginTop: "0.9rem", padding: "0.8rem 1.25rem" }}>
        <div style={{ fontSize: "1.05rem", lineHeight: 1.5 }}>
          Measure one thing: releases that broke a listed journey. Not test count. Not coverage.
        </div>
      </Panel>
    </Appear>
    <Appear priority={6}>
      <Bridge>So where do we start?</Bridge>
    </Appear>
  </div>
);

export default HowWeProceed;
