import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import Serif from "../../components/Serif";
import NumberBadge from "../../components/NumberBadge";
import Bridge from "../../components/Bridge";

const journeys = [
  "An authorized user signs in and opens a report they are allowed to see.",
  "A user without the required group cannot open a restricted report.",
  "An uploaded document is stored, indexed and found again in search.",
  "A document link from SiteMATE resolves through the whole chain.",
];

const TestWhatHurts = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "1.5rem", alignItems: "stretch" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Appear priority={1}>
        <Panel tone="navy" style={{ height: "auto" }}>
          <Label onNavy>Principle</Label>
          <Serif size="1.5rem" color={db.white}>
            Do not test everything end to end.
          </Serif>
          <div style={{ marginTop: "0.6rem", fontSize: "1rem", color: db.onNavyMuted, lineHeight: 1.45 }}>
            Test the five to ten journeys we cannot afford to break.
          </div>
        </Panel>
      </Appear>
    </div>

    <Panel style={{ height: "auto" }}>
      <Label>Dokumentbanken: journeys that would hurt</Label>
      <div style={{ display: "grid", gap: "0.7rem" }}>
        {journeys.map((j, idx) => (
          <Appear key={j} priority={idx + 2}>
            <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
              <NumberBadge size={28}>{String(idx + 1)}</NumberBadge>
              <div style={{ fontSize: "1rem", lineHeight: 1.45, paddingTop: 3 }}>{j}</div>
            </div>
          </Appear>
        ))}
      </div>
    </Panel>
    <Appear priority={6}>
      <Bridge>Four journeys. Where do they run, and who runs them?</Bridge>
    </Appear>
  </div>
);

export default TestWhatHurts;
