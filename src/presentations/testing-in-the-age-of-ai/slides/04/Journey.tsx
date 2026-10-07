import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import NumberBadge from "../../components/NumberBadge";
import Bullets from "../../components/Bullets";
import Serif from "../../components/Serif";
import Footnote from "../../components/Footnote";
import Bridge from "../../components/Bridge";

const steps = [
  { n: "1", title: "User", detail: "opens Dokumentbanken" },
  { n: "2", title: "Entra ID + MFA", detail: "who are you?" },
  { n: "3", title: "Authorization", detail: "which reports may you see?" },
  { n: "4", title: "React", detail: "calls the API" },
  { n: "5", title: "FastAPI", detail: "finds and serves the report" },
  { n: "6", title: "Storage and integrations", detail: "documents, metadata, SiteMATE" },
  { n: "7", title: "Visible result", detail: "the right PDF opens" },
];

const Journey = () => (
  <div>
    <Label>One request, seven places to be right</Label>
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "0.5rem" }}>
      <div style={{ position: "absolute", left: "7%", right: "7%", top: 17, height: 2, background: db.line }} />
      {steps.map((s, idx) => (
        <Appear key={s.n} priority={idx + 1}>
          <div style={{ textAlign: "center", position: "relative" }}>
            <NumberBadge>{s.n}</NumberBadge>
            <div style={{ marginTop: "0.5rem", fontWeight: 700, fontSize: "0.88rem", color: db.navy, lineHeight: 1.25 }}>{s.title}</div>
            <div style={{ fontSize: "0.78rem", color: db.muted, marginTop: 2, lineHeight: 1.3 }}>{s.detail}</div>
          </div>
        </Appear>
      ))}
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "1rem", marginTop: "1.4rem" }}>
      <Appear priority={8}>
        <Panel tone="navy">
          <Label onNavy>The gap</Label>
          <Serif size="1.35rem" color={db.white}>
            Every piece can pass its own tests while this journey is broken.
          </Serif>
        </Panel>
      </Appear>
      <Appear priority={9}>
        <Panel>
          <Label>Seen in practice</Label>
          <Bullets
            items={[
              "Wrong token audience: the API rejects a valid login",
              "Missing role or group claim: an allowed user gets 403",
              "Frontend and backend contract drift: the call succeeds, the data is wrong",
              "Configuration differs between test and production",
              "Document stored, but not found or not readable afterwards",
            ]}
          />
        </Panel>
      </Appear>
    </div>
    <Appear priority={9}>
      <Footnote>That gap is what a small end-to-end suite is for.</Footnote>
    </Appear>
    <Appear priority={10}>
      <Bridge>But which journeys? That is where I need you.</Bridge>
    </Appear>
  </div>
);

export default Journey;
