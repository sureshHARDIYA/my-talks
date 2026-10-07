import { motion, AnimatePresence } from "framer-motion";

import { db } from "./theme";
import Frame from "./Frame";
import Label from "./Label";
import { useClock } from "./useClock";

const TOTAL = 120;
const GREEN = "#2E8B57";
const RED = "#B3261E";
const PERIOD = 8000;

const Grid = ({ passed }: { passed: number }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(20, 1fr)", gap: 2 }}>
    {Array.from({ length: TOTAL }, (_, i) => (
      <div key={i} style={{ aspectRatio: "1", borderRadius: 2, background: i < passed ? GREEN : db.panel2, transition: "background 0.2s" }} />
    ))}
  </div>
);

const SigningIn = () => (
  <motion.div key="in" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div style={{ fontSize: "0.9rem", color: db.ink }}>Signing in</div>
    <div style={{ fontSize: "0.8rem", color: db.muted, marginTop: 4 }}>Entra ID + MFA …</div>
  </motion.div>
);

const Forbidden = () => (
  <motion.div key="403" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
    <div style={{ background: RED, color: db.white, borderRadius: 6, padding: "0.4rem 0.6rem" }}>
      <div style={{ fontFamily: db.serif, fontSize: "1.05rem", fontWeight: 700 }}>403 Forbidden</div>
      <div style={{ fontSize: "0.7rem", opacity: 0.85 }}>missing group claim · report not opened</div>
    </div>
    <div style={{ marginTop: "0.5rem", fontFamily: db.serif, fontSize: "0.95rem", fontWeight: 700, color: db.navy }}>Every piece passed.</div>
    <div style={{ fontFamily: db.serif, fontSize: "0.95rem", fontWeight: 700, color: RED }}>The journey did not.</div>
  </motion.div>
);

/** Unit tests turn green while the Dokumentbanken journey ends in a 403. */
const GreenButBroken = () => {
  const t = useClock(PERIOD);
  const passed = Math.min(TOTAL, Math.floor((t / 3000) * TOTAL));
  const broken = t > 4000;
  return (
    <Frame style={{ padding: "0.7rem 0.8rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
        <div style={{ background: db.panel, borderRadius: 8, padding: "0.6rem 0.7rem" }}>
          <Label>Unit tests</Label>
          <Grid passed={passed} />
          <div style={{ marginTop: "0.6rem", fontFamily: db.serif, fontSize: "1.1rem", fontWeight: 700, color: db.navy }}>
            {passed} / {TOTAL}
          </div>
          <div style={{ fontSize: "0.72rem", color: db.muted }}>passed · coverage 94 %</div>
        </div>
        <div style={{ border: `1px solid ${db.line}`, borderRadius: 8, padding: "0.6rem 0.7rem" }}>
          <div style={{ fontWeight: 700, color: db.navy, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Dokumentbanken</div>
          <AnimatePresence mode="wait">{broken ? <Forbidden /> : <SigningIn />}</AnimatePresence>
        </div>
      </div>
    </Frame>
  );
};

export default GreenButBroken;
