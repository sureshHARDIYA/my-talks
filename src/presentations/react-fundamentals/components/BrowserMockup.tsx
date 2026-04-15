import { leroyTheme } from "@/theme/leroy";
import { NEW_NODE_BORDER_COLOR } from "./browserMockupConstants";

type Props = {
  /** Show an extra paragraph with a border (e.g. "new" content). */
  showNewParagraph?: boolean;
  /** Border color for the new paragraph. */
  newParagraphBorderColor?: string;
  /** Optional URL in the address bar. */
  url?: string;
  /** Optional custom content instead of default Lerøy heading + paragraph. */
  children?: React.ReactNode;
};

/**
 * Reusable browser window mockup: chrome (traffic lights, address bar),
 * content area. Use for “how a page looks” or “adding a paragraph” slides.
 */
export function BrowserMockup({
  showNewParagraph = false,
  newParagraphBorderColor = NEW_NODE_BORDER_COLOR,
  url = "leroyseafood.com",
  children,
}: Props) {
  return (
    <div
      className="overflow-hidden"
      style={{
        maxWidth: 420,
        borderRadius: 10,
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,.15), 0 0 0 1px rgba(0,0,0,.06), inset 0 1px 0 rgba(255,255,255,.6)",
        background: "#f1f3f4",
      }}
    >
      {/* Chrome: traffic lights + title bar */}
      <div
        className="flex items-center gap-2 px-3 py-2.5"
        style={{
          background: "linear-gradient(180deg, #e8eaed 0%, #dadce0 100%)",
          borderBottom: "1px solid #bdc1c6",
        }}
      >
        <span
          className="w-3.5 h-3.5 rounded-full flex-shrink-0"
          style={{ background: "#ff5f57", boxShadow: "0 0 0 0.5px rgba(0,0,0,.08)" }}
        />
        <span
          className="w-3.5 h-3.5 rounded-full flex-shrink-0"
          style={{ background: "#febc2e", boxShadow: "0 0 0 0.5px rgba(0,0,0,.08)" }}
        />
        <span
          className="w-3.5 h-3.5 rounded-full flex-shrink-0"
          style={{ background: "#28c840", boxShadow: "0 0 0 0.5px rgba(0,0,0,.08)" }}
        />
        <div
          className="flex-1 flex items-center justify-center gap-2 mx-4 py-1.5 px-4 rounded-md"
          style={{
            background: "rgba(255,255,255,.9)",
            border: "1px solid #dadce0",
            maxWidth: 280,
          }}
        >
          <span style={{ color: "#5f6368", fontSize: 12 }}>🔒</span>
          <span className="text-sm truncate" style={{ color: leroyTheme.grey60 }}>
            {url}
          </span>
        </div>
      </div>
      {/* Content area with subtle inner top shadow */}
      <div
        className="relative p-6 bg-white"
        style={{
          minHeight: 120,
          boxShadow: "inset 0 2px 4px rgba(0,0,0,.04)",
        }}
      >
        {children ?? (
          <>
            <h1
              className="text-xl font-bold mb-2"
              style={{ color: leroyTheme.textBlue }}
            >
              Welcome to Lerøy Seafood Group
            </h1>
            <p className="text-base mb-2" style={{ color: leroyTheme.grey80 }}>
              Norsk sjømatpioner siden 1899. From fjord to table.
            </p>
            {showNewParagraph && (
              <p
                className="text-base mt-2 p-3 rounded"
                style={{
                  color: leroyTheme.grey80,
                  border: `2px solid ${newParagraphBorderColor}`,
                }}
              >
                New paragraph. Only this part is added.
              </p>
            )}
          </>
        )}
      </div>
      {/* Optional thin scrollbar track */}
      <div
        className="h-2 flex justify-end pr-1"
        style={{
          background: "#f1f3f4",
          borderTop: "1px solid #e8eaed",
        }}
      >
        <div
          className="w-2 rounded-full mt-0.5"
          style={{ background: "#dadce0", height: 6 }}
        />
      </div>
    </div>
  );
}
