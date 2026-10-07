import { motion } from "framer-motion";

import { db } from "./theme";
import Frame from "./Frame";

const W = 640;
const H = 300;
const OX = 50;
const OY = 250;
const EX = 610;
const EY = 50;

const pt = (x: number, y: number) => `${OX + x * (EX - OX)},${OY - y * (OY - EY)}`;

/** Steep growth of generated tests against flat release confidence. */
const tests = `M ${pt(0, 0.08)} C ${pt(0.45, 0.1)} ${pt(0.7, 0.35)} ${pt(1, 0.88)}`;
const confidence = `M ${pt(0, 0.3)} C ${pt(0.35, 0.4)} ${pt(0.65, 0.34)} ${pt(1, 0.3)}`;

const draw = (delay: number) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 2.2, delay, ease: "easeInOut" as const, repeat: Infinity, repeatDelay: 3, repeatType: "loop" as const },
});

const AiFlood = () => (
  <Frame>
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block" }}>
      <line x1={OX} y1={OY} x2={EX} y2={OY} stroke={db.line} />
      <line x1={OX} y1={OY} x2={OX} y2={EY} stroke={db.line} />
      <text x={OX} y={OY + 20} fontSize={13} fill={db.muted} fontFamily={db.sans}>2023</text>
      <text x={EX} y={OY + 20} fontSize={13} fill={db.muted} fontFamily={db.sans} textAnchor="end">2026</text>

      <motion.path d={tests} fill="none" stroke={db.navy} strokeWidth={4} strokeLinecap="round" {...draw(0)} />
      <motion.path d={confidence} fill="none" stroke={db.accent} strokeWidth={4} strokeLinecap="round" {...draw(0.4)} />

      <rect x={70} y={48} width={14} height={14} fill={db.navy} />
      <text x={92} y={60} fontSize={14} fontWeight={700} fill={db.navy} fontFamily={db.sans}>tests generated</text>
      <rect x={70} y={74} width={14} height={14} fill={db.accent} />
      <text x={92} y={86} fontSize={14} fontWeight={700} fill={db.accent} fontFamily={db.sans}>confidence to release</text>

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: 5.6, times: [0, 0.45, 0.55, 0.95, 1], repeat: Infinity }}>
        <text x={70} y={130} fontSize={17} fontWeight={700} fill={db.navy} fontFamily={db.serif}>More tests is not more confidence</text>
        <text x={70} y={152} fontSize={14} fill={db.ink} fontFamily={db.sans}>unless they test what must be true.</text>
      </motion.g>
    </svg>
  </Frame>
);

export default AiFlood;
