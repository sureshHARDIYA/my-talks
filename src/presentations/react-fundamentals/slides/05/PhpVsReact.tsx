import { Box, useSteps } from "spectacle";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserMockup,
  NEW_NODE_BORDER_COLOR_ORANGE,
} from "../../components/BrowserMockup";
import { DOMTreeSVG } from "../../components/DOMTreeSVG";
import { leroyTheme } from "@/theme/leroy";

const PhpVsReact = () => {
  const { step, placeholder } = useSteps(2);

  return (
    <Box padding="0 0.5rem" position="relative">
      {placeholder}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Left: browser appears first */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <BrowserMockup
              showNewParagraph
              newParagraphBorderColor={NEW_NODE_BORDER_COLOR_ORANGE}
            />
          </motion.div>
        </div>

        {/* Right: DOM tree appears on second step */}
        <div className="flex flex-col" style={{ minWidth: 280 }}>
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                key="dom"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col"
              >
                <p className="text-sm mb-2" style={{ color: leroyTheme.grey80 }}>
                  DOM tree (Welcome to Lerøy) — new node added
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
                  <DOMTreeSVG
                    includeNewParagraph
                    highlightNewParagraphColor={NEW_NODE_BORDER_COLOR_ORANGE}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Box>
  );
};

export default PhpVsReact;
