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
    title: "Forms & inputs",
    items: [
      "Controlled vs uncontrolled: pick one intentionally; don’t mix randomly.",
      "Debounce expensive input work (search, filtering) to avoid UI lag.",
    ],
  },
  {
    title: "Errors & resilience",
    items: [
      <>Add <code style={codeStyle}>Error Boundaries</code> around risky UI areas (dashboard widgets, charts).</>,
      "Show loading/empty/error states consistently (no blank screens).",
      "Log errors with context (route, user action, correlation id).",
    ],
  },
  {
    title: "Security & correctness",
    items: [
      "Never trust the UI: validate permissions on the backend too.",
      <>Avoid <code style={codeStyle}>dangerouslySetInnerHTML</code> unless sanitized.</>,
      <>Keep secrets out of frontend; use <code style={codeStyle}>env</code> vars correctly.</>,
    ],
  },
  {
    title: "Quality & team practices",
    items: [
      <>TypeScript (or at least strict lint rules) to prevent “stringly-typed” bugs.</>,
      <>Testing pyramid: unit for utils/hooks, integration for components, few <code style={codeStyle}>E2E</code> for critical flows.</>,
      <>Consistent formatting/linting (<code style={codeStyle}>Prettier</code> + <code style={codeStyle}>ESLint</code>) and enforce in CI.</>,
    ],
  },
];

const SummaryPart2 = () => {
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

export default SummaryPart2;
