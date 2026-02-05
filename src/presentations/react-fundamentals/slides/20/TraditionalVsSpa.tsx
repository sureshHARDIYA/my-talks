import { Box, useSteps } from "spectacle";
import { motion, AnimatePresence } from "framer-motion";
import { ServerIcon, ClientIcon } from "../../components/ServerClientIcons";
import { leroyTheme } from "@/theme/leroy";

const ORANGE = "#ea580c";

const CARD_STYLE = {
  padding: "1.5rem 2rem",
  borderRadius: 12,
  border: `2px solid ${leroyTheme.grey20}`,
  background: leroyTheme.grey0,
  minWidth: 160,
  alignItems: "center" as const,
  display: "flex",
  flexDirection: "column" as const,
  gap: 12,
};

/**
 * Step 0: only title.
 * Step 1: Traditional — Server + Client.
 * Step 2: Traditional + arrow "Entire document transferred".
 * Step 3: Single page application — Server + Client.
 * Step 4: SPA + arrow "Only changed part transferred".
 */
const TraditionalVsSpa = () => {
  const { step, placeholder } = useSteps(5);

  return (
    <Box padding="0 0.5rem" position="relative">
      {placeholder}

      {/* Step 0: nothing — only slide title is visible */}

      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            key="traditional-server-client"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm font-semibold" style={{ color: leroyTheme.grey80 }}>
              Traditional web app
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* Server */}
              <div style={CARD_STYLE}>
                <ServerIcon />
                <span className="text-sm font-semibold" style={{ color: leroyTheme.grey80 }}>
                  Server
                </span>
              </div>

              {/* Animated arrow: visible from step 2 */}
              {step >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-1"
                  style={{ minWidth: 140 }}
                >
                  <div className="relative flex items-center justify-center">
                    <svg width={100} height={20} viewBox="0 0 100 20" className="overflow-visible">
                      <defs>
                        <linearGradient id="traditional-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={leroyTheme.linkBlue} stopOpacity={0.3} />
                          <stop offset="100%" stopColor={leroyTheme.linkBlue} stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <motion.line
                        x1={0}
                        y1={10}
                        x2={70}
                        y2={10}
                        stroke={leroyTheme.linkBlue}
                        strokeWidth={2}
                        strokeDasharray="8 6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      />
                      <motion.line
                        x1={0}
                        y1={10}
                        x2={70}
                        y2={10}
                        stroke="url(#traditional-arrow-gradient)"
                        strokeWidth={2}
                        strokeDasharray="8 6"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -28 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.7 }}
                      />
                      <motion.path
                        d="M70 6 L88 10 L70 14 Z"
                        fill={leroyTheme.linkBlue}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      />
                    </svg>
                  </div>
                  <motion.span
                    className="text-xs font-semibold"
                    style={{ color: leroyTheme.linkBlue }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Entire document transferred
                  </motion.span>
                </motion.div>
              )}

              {/* Client */}
              <div style={CARD_STYLE}>
                <ClientIcon />
                <span className="text-sm font-semibold" style={{ color: leroyTheme.grey80 }}>
                  Client
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3–4: Single page application — same layout, orange arrow for "only changed part" */}
      <AnimatePresence>
        {step >= 3 && (
          <motion.div
            key="spa-server-client"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 mt-8 pt-8 border-t"
            style={{ borderColor: leroyTheme.grey20 }}
          >
            <p className="text-sm font-semibold" style={{ color: leroyTheme.grey80 }}>
              Single page application
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div style={CARD_STYLE}>
                <ServerIcon />
                <span className="text-sm font-semibold" style={{ color: leroyTheme.grey80 }}>
                  Server
                </span>
              </div>

              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-1"
                  style={{ minWidth: 140 }}
                >
                  <div className="relative flex items-center justify-center">
                    <svg width={100} height={20} viewBox="0 0 100 20" className="overflow-visible">
                      <defs>
                        <linearGradient id="spa-arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={ORANGE} stopOpacity={0.3} />
                          <stop offset="100%" stopColor={ORANGE} stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <motion.line
                        x1={0}
                        y1={10}
                        x2={70}
                        y2={10}
                        stroke={ORANGE}
                        strokeWidth={2}
                        strokeDasharray="8 6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      />
                      <motion.line
                        x1={0}
                        y1={10}
                        x2={70}
                        y2={10}
                        stroke="url(#spa-arrow-gradient)"
                        strokeWidth={2}
                        strokeDasharray="8 6"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -28 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.7 }}
                      />
                      <motion.path
                        d="M70 6 L88 10 L70 14 Z"
                        fill={ORANGE}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      />
                    </svg>
                  </div>
                  <motion.span
                    className="text-xs font-semibold"
                    style={{ color: ORANGE }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Only changed part transferred
                  </motion.span>
                </motion.div>
              )}

              <div style={CARD_STYLE}>
                <ClientIcon />
                <span className="text-sm font-semibold" style={{ color: leroyTheme.grey80 }}>
                  Client
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default TraditionalVsSpa;
