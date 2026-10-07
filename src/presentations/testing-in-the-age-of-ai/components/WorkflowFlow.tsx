import { motion } from "framer-motion";

import { db } from "./theme";
import Frame from "./Frame";
import { useClock } from "./useClock";

const steps = ["Intent", "What must be true?", "What can seriously fail?", "Tests and constraints", "Implement: human or AI", "Evidence", "Release"];
const STEP_MS = 900;
const PERIOD = steps.length * STEP_MS + 2000;

/** Workflow boxes light up in order; tests precede implementation. */
const WorkflowFlow = () => {
  const t = useClock(PERIOD);
  const active = Math.min(steps.length - 1, Math.floor(t / STEP_MS));
  return (
    <Frame maxWidth={900}>
      <div style={{ textAlign: "center", fontFamily: db.serif, fontSize: "1.3rem", fontWeight: 700, color: db.navy, marginBottom: "1rem" }}>
        Define correctness first. Then implement.
      </div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
        {steps.map((s, k) => {
          const on = k <= active;
          return (
            <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <motion.div
                animate={{ backgroundColor: on ? db.navy : db.panel, color: on ? db.white : db.soft }}
                transition={{ duration: 0.3 }}
                style={{ flex: 1, minHeight: 64, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0.4rem 0.5rem", fontSize: "0.8rem", fontWeight: 700, lineHeight: 1.3 }}
              >
                {s}
              </motion.div>
              {k < steps.length - 1 && <div style={{ width: 10, height: 2, background: k < active ? db.navy : db.panel2, transition: "background 0.3s" }} />}
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: "0.9rem", fontSize: "0.95rem", color: db.muted, minHeight: "1.4em", opacity: active >= 3 ? 1 : 0, transition: "opacity 0.4s" }}>
        Tests become the contract, for people and for agents.
      </div>
    </Frame>
  );
};

export default WorkflowFlow;
