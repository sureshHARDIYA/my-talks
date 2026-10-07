import { Appear } from "spectacle";

import { db } from "../../components/theme";
import Label from "../../components/Label";
import Panel from "../../components/Panel";
import Footnote from "../../components/Footnote";
import Serif from "../../components/Serif";
import Bridge from "../../components/Bridge";

const items = [
  {
    title: "Write the journey list",
    detail: "Per application: the five to ten journeys we cannot afford to break. One page, reviewed by the team.",
    examples: [
      "Sign in with Entra ID and land on the start page",
      "Open a report the user is allowed to see",
      "Be refused a report the user is not allowed to see",
      "Upload a document and find it again in search",
      "Follow a SiteMATE link through to the right PDF",
    ],
  },
  {
    title: "Test behaviour, not code",
    detail: "Each journey gets a test that asserts what the user sees. Tests follow from what must be true, not from the diff.",
    examples: [
      "The report that opens is the one that was clicked",
      "The refused user sees a clear message, not a blank page",
      "The uploaded file is readable after download",
      "Search returns the document within a few seconds",
      "A changed role takes effect at the next sign-in",
    ],
  },
  {
    title: "Play the hostile user",
    detail: "For every input, try what it should refuse and watch how the system fails.",
    examples: [
      "Text and emoji in a number field",
      "Negative, zero and very large values",
      "Empty fields, whitespace only, 10 000 characters",
      "End date before start date, 31 February",
      "A URL to a document from another company",
    ],
  },
  {
    title: "Break it yourself",
    detail: "Before release, the team spends one hour as a tiger team trying to break what it just built.",
    examples: [
      "Double-click submit, press back mid-upload",
      "Use the app with the token expired",
      "Two users edit the same document at once",
      "Open yesterday's link after a deployment",
      "Every finding becomes a journey or a test",
    ],
  },
];

const Checkbox = () => (
  <div style={{ width: 22, height: 22, borderRadius: 5, border: `2px solid ${db.navy}`, flexShrink: 0, marginTop: 3 }} />
);

const HowWeProceed = () => (
  <div>
    <Label>Checklist, open for change</Label>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.6rem" }}>
      {items.map((it, idx) => (
        <Appear key={it.title} priority={idx + 1}>
          <Panel style={{ padding: "0.65rem 1rem" }}>
            <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
              <Checkbox />
              <div>
                <Serif size="1.1rem">{it.title}</Serif>
                <div style={{ marginTop: "0.25rem", fontSize: "0.85rem", lineHeight: 1.35, color: db.ink }}>{it.detail}</div>
                <ul style={{ margin: "0.45rem 0 0", paddingLeft: "1.1rem", fontSize: "0.8rem", lineHeight: 1.3, color: db.muted, listStyle: "disc" }}>
                  {it.examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Panel>
        </Appear>
      ))}
    </div>

    <Appear priority={5}>
      <Footnote>Measure one thing: releases that broke a listed journey. Not test count. Not coverage.</Footnote>
    </Appear>
    <Appear priority={6}>
      <Bridge>So where do we start?</Bridge>
    </Appear>
  </div>
);

export default HowWeProceed;
