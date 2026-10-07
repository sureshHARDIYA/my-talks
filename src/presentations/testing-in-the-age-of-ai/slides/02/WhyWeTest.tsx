import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Serif from "../../components/Serif";
import Panel from "../../components/Panel";
import GreenButBroken from "../../components/GreenButBroken";
import Source from "../../components/Source";

const WhyWeTest = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "2rem", alignItems: "start" }}>
    <div>
      <Label>The goal</Label>

      <Appear priority={1}>
        <div style={{ fontSize: "1.15rem", lineHeight: 1.5, color: db.muted, marginBottom: "1rem" }}>
          The goal is not to have more tests or higher coverage.
        </div>
      </Appear>

      <Appear priority={2}>
        <Serif size="1.7rem">The goal of testing is confidence:</Serif>
      </Appear>

      <Appear priority={3}>
        <div style={{ fontSize: "1.2rem", lineHeight: 1.5, color: db.ink, marginTop: "0.6rem" }}>
          confidence that we can change and release software without breaking what matters.
        </div>
      </Appear>

      <Appear priority={5}>
        <div style={{ marginTop: "1.4rem", fontSize: "0.95rem", lineHeight: 1.5, color: db.muted }}>
          We are not alone in this view. In a 2026 survey of 405 leaders, 96 % said testing is critical to business outcomes and managing risk.
        </div>
        <Source>
          Forrester Consulting, Testing In The Age Of AI, commissioned by Worksoft, June 2026.</Source>
      </Appear>
    </div>

    <Appear priority={4}>
      <Panel tone="navy" style={{ height: "auto", padding: "1.1rem 1.4rem", marginBottom: "1rem" }}>
        <Serif size="1.35rem" color={db.white}>
          A system can have hundreds of passing unit tests and still be unusable.
        </Serif>
        <br />
        <GreenButBroken />
        <br />
        <Appear priority={6}>
          <div style={{ marginTop: "1.4rem", fontSize: "0.95rem", lineHeight: 1.5, color: "white" }}>
            So, how do we achieve this confidence?
          </div>
        </Appear>
        <Appear priority={7}>
          <Serif size="1.15rem" color={db.white}>
            By testing what matters. And what matters depends on which question we are asking.
          </Serif>
        </Appear>
      </Panel>
    </Appear>

  </div>
);

export default WhyWeTest;
