import { useEffect, useState } from "react";

/** Elapsed milliseconds within a repeating period, ticking at ~10 fps. */
export const useClock = (periodMs: number, tickMs = 100) => {
  const [t, setT] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const id = window.setInterval(() => setT((performance.now() - start) % periodMs), tickMs);
    return () => window.clearInterval(id);
  }, [periodMs, tickMs]);
  return t;
};
