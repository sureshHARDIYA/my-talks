import { Box, useSteps } from "spectacle";
import { motion, AnimatePresence } from "framer-motion";
import { leroyTheme } from "@/theme/leroy";
import { DOMTreeSVG } from "../../components/DOMTreeSVG";

const processSteps = [
  { key: "1", label: "Request", desc: "Browser requests HTML from server" },
  { key: "2", label: "HTML", desc: "Server sends raw HTML" },
  { key: "3", label: "DOM parser", desc: "Parser builds document structure" },
  { key: "4", label: "DOM tree", desc: "In-memory tree of nodes" },
  { key: "5", label: "Render & paint", desc: "Layout and pixels on screen" },
];

const reveal = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

const TOTAL_STEPS = 8; // 0: title only | 1: left title | 2–6: process steps | 7: right column

const BrowserRenderingProcess = () => {
  const { step, placeholder } = useSteps(TOTAL_STEPS);

  return (
    <Box padding="0 0.5rem" position="relative">
      {placeholder}

      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            style={{ minHeight: "420px" }}
          >
            {/* Left column: title then process steps */}
            <div className="flex flex-col" style={{ minWidth: 0 }}>
              {step >= 1 && (
                <motion.div {...reveal} key="left-title">
                  <p-heading size="medium" style={{ color: leroyTheme.linkBlue, marginBottom: "0.25rem" }}>
                    How the browser renders the page
                  </p-heading>
                  <p className="text-sm mb-3" style={{ color: leroyTheme.grey80 }}>
                    Process (simplified)
                  </p>
                </motion.div>
              )}
              {processSteps.map(
                (s, i) =>
                  step >= i + 2 && (
                    <motion.div
                      key={s.key}
                      initial={reveal.initial}
                      animate={reveal.animate}
                      transition={reveal.transition}
                      className="flex items-center gap-3 mb-2 rounded px-3 py-2"
                      style={{ background: leroyTheme.grey10 }}
                    >
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ background: leroyTheme.linkBlue, color: "#fff" }}
                      >
                        {s.key}
                      </span>
                      <div>
                        <span className="font-semibold" style={{ color: leroyTheme.textBlue }}>
                          {s.label}
                        </span>
                        <p className="text-sm m-0" style={{ color: leroyTheme.grey80 }}>
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  )
              )}
            </div>

            {/* Right column: DOM tree (after last process step) */}
            {step >= 7 && (
              <motion.div
                className="flex flex-col"
                style={{ minWidth: 280 }}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" as const }}
              >
                <p className="text-sm mb-2" style={{ color: leroyTheme.grey80 }}>
                  DOM tree (Welcome to Lerøy)
                </p>
                <div
                  style={{
                    width: "100%",
                    height: 360,
                    minWidth: 280,
                    border: `1px solid ${leroyTheme.grey20}`,
                    borderRadius: 8,
                    overflow: "hidden",
                    background: leroyTheme.grey0,
                  }}
                >
                  <DOMTreeSVG />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default BrowserRenderingProcess;
