import { Appear, Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { Accordion } from "../../components/Accordion";
import { leroyTheme } from "@/theme/leroy";

const codeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "12px",
    lineHeight: "1.35",
    padding: "1.25rem 1.5rem",
    margin: 0,
  },
  'code[class*="language-"]': { ...tomorrow['code[class*="language-"]'], fontSize: "12px", lineHeight: "1.35" },
};

const lb = "{";
const rb = "}";

// Accordion component code (no types) — Line 1: props, Line 2: state
const ACCORDION_CODE = `export function Accordion(${lb} items, allowMultiple = false ${rb}) {
  const [open, setOpen] = useState(new Set([0]));
  const toggle = (index) => {
    setOpen((prev) => ${lb} ... ${rb});
  };
  return (
    <div>
      ${lb}items.map((item, i) => (
        <button key={i} onClick={() => toggle(i)}>${lb}item.title${rb}</button>
      ))${rb}
    </div>
  );
}`;

const ACCORDION_HIGHLIGHT_RANGES = [2, 2];

// One-line usage: passing props to Accordion
const ACCORDION_USAGE_CODE = `<Accordion items=${lb}accordionItems${rb} allowMultiple=${lb}false${rb} />`;

const TheBigQuestion = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2.5rem",
        padding: "2rem 2.5rem",
        width: "100%",
        boxSizing: "border-box",
        alignItems: "stretch",
      }}
    >
      {/* Left column: question + list + accordion */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>
        <Appear priority={1}>
          <p-heading tag="h1" size="large" style={{ color: leroyTheme.grey80, marginBottom: "1rem" }}>
            🤔 How does React know what changed?
          </p-heading>
        </Appear>
        <ul className="list-disc pl-6 text-left" style={{ margin: 0, paddingBottom: "1.25rem", fontSize: "1rem", color: leroyTheme.black }}>
          <Appear priority={2}>
            <li className="mb-3">React does NOT watch the DOM.</li>
          </Appear>
          <Appear priority={3}>
            <li className="mb-3">React does NOT track every variable.</li>
          </Appear>
          <Appear priority={4}>
            <li className="mb-0">React only reacts to <strong style={{ color: leroyTheme.linkBlue }}>state</strong> & <strong style={{ color: leroyTheme.linkBlue }}>props</strong> changes.</li>
          </Appear>
        </ul>
        <Appear priority={5}>
          <Box marginTop="0.25rem">
          <Accordion
            items={[
              {
                title: "Props",
                content: (
                  <span>
                    Data passed <em>into</em> a component from its parent. Read-only. Shown in the function signature (e.g. <code style={{ background: leroyTheme.grey20, padding: "2px 4px", borderRadius: 4 }}>step, label</code>).
                  </span>
                ),
              },
              {
                title: "State",
                content: (
                  <span>
                    Data owned and updated <em>inside</em> a component (e.g. <code style={{ background: leroyTheme.grey20, padding: "2px 4px", borderRadius: 4 }}>useState</code>). When state changes, React re-renders.
                  </span>
                ),
              },
            ]}
          />
          </Box>
        </Appear>
      </div>

      {/* Right column: Accordion component code + one-line usage */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>
        <Appear priority={5}>
          <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden", flex: 1, minHeight: 180 }}>
            <CodePane
              language="jsx"
              theme={codeTheme}
              showLineNumbers
              highlightRanges={ACCORDION_HIGHLIGHT_RANGES}
            >
              {ACCORDION_CODE}
            </CodePane>
          </div>
          <p className="text-xs font-semibold" style={{ color: leroyTheme.grey80, marginTop: "0.75rem", marginBottom: "0.25rem" }}>
            Using Accordion (passing props):
          </p>
          <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 6, overflow: "hidden" }}>
            <CodePane language="jsx" theme={codeTheme} showLineNumbers={false}>
              {ACCORDION_USAGE_CODE}
            </CodePane>
          </div>
        </Appear>
      </div>
    </div>
  );
};

export default TheBigQuestion;
