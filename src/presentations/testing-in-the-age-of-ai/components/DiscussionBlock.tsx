import { Appear } from "spectacle";

import { db } from "./theme";
import Label from "./Label";
import Panel from "./Panel";
import Serif from "./Serif";
import NumberBadge from "./NumberBadge";

type Props = { question: string; prompts: string[]; minutes: string; stacked?: boolean };

/** Pause-and-talk block: question in a navy panel, prompts in light panels. */
const DiscussionBlock = ({ question, prompts, minutes, stacked = false }: Props) => (
  <div>
    <Appear priority={1}>
      <Panel tone="navy" style={{ padding: "1.5rem 1.75rem", height: "auto" }}>
        <Label onNavy>{`Discussion · ${minutes}`}</Label>
        <Serif size="1.9rem" color={db.white}>
          {question}
        </Serif>
      </Panel>
    </Appear>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: stacked ? "1fr" : `repeat(${prompts.length}, minmax(0, 1fr))`,
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {prompts.map((p, idx) => (
        <Appear key={p} priority={idx + 2}>
          <Panel>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <NumberBadge size={28}>{String(idx + 1)}</NumberBadge>
              <div style={{ fontSize: "1rem", lineHeight: 1.45 }}>{p}</div>
            </div>
          </Panel>
        </Appear>
      ))}
    </div>
  </div>
);

export default DiscussionBlock;
