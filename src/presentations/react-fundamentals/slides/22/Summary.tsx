import { Appear, Box } from "spectacle";
import { leroyTheme } from "@/theme/leroy";

const codeStyle = {
  color: "#6d28d9",
  background: "#f5f3ff",
  padding: "0 4px",
  borderRadius: 4,
  fontSize: "0.95em",
};

const takeaways = [
  {
    title: "Code structure & readability",
    items: [
      <>Separate UI from logic: move heavy logic to hooks/services (<code style={codeStyle}>useXyz</code>, <code style={codeStyle}>api.ts</code>).</>,
      <>Name things well: components = nouns, handlers = <code style={codeStyle}>handleX</code>, hooks = <code style={codeStyle}>useX</code>.</>,
      <>Prefer composition over props drilling: use <code style={codeStyle}>children</code>, slot patterns, and small wrapper components.</>,
    ],
  },
  {
    title: "State management",
    items: [
      "Keep state minimal: store source-of-truth only; derive the rest.",
      "Avoid duplicating state (same data in multiple places = bugs).",
      <>Use server-state tools (<code style={codeStyle}>TanStack Query</code>) for fetching/caching instead of ad‑hoc effects.</>,
    ],
  },
  {
    title: "useEffect discipline",
    items: [
      <>Don’t use <code style={codeStyle}>useEffect</code> for derived state (compute during render).</>,
      "Effects should synchronize with external systems only (fetch, subscriptions, DOM integration).",
      "Always cleanup subscriptions/timers; abort fetch on unmount when needed.",
    ],
  },
  {
    title: "Rendering & performance",
    items: [
      "Stable keys in lists (never array index if items can reorder).",
      <>Memoization is a scalpel, not a hammer: use <code style={codeStyle}>useMemo</code>/<code style={codeStyle}>useCallback</code>/<code style={codeStyle}>React.memo</code> only when it solves real re-render cost.</>,
      "Virtualize big lists (e.g., 1k+ rows) to avoid slow DOM.",
      <>Code-split large routes/components (<code style={codeStyle}>lazy</code>, <code style={codeStyle}>Suspense</code>) where it matters.</>,
    ],
  },
];

const Summary = () => {
  return (
    <Box>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
        <tbody>
          {takeaways.map((section, index) => (
            <Appear key={section.title} priority={index + 1} tagName="tr">
              <td
                style={{
                  padding: "10px",
                  width: "30%",
                  verticalAlign: "top",
                  color: leroyTheme.black,
                  fontWeight: 700,
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: index % 2 === 0 ? "#f8fafc" : "#ffffff",
                }}
              >
                {section.title}
              </td>
              <td
                style={{
                  padding: "10px",
                  verticalAlign: "top",
                  borderBottom: "1px solid #e5e7eb",
                  backgroundColor: index % 2 === 0 ? "#f8fafc" : "#ffffff",
                }}
              >
                <ul style={{ margin: 0, paddingLeft: "1.2rem", color: leroyTheme.black }}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: "6px" }}>
                      <span style={{ fontWeight: 700 }}>{`R${itemIndex + 1} — `}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </td>
            </Appear>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Summary;
