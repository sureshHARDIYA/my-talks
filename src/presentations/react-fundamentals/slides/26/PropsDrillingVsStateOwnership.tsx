import { Appear, Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { leroyTheme } from "@/theme/leroy";

const codeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "10px",
    lineHeight: "1.3",
    padding: "0.65rem",
    margin: 0,
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "10px",
    lineHeight: "1.3",
  },
};

const WRONG_CODE = `// ❌ State too high up
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Layout>
      <Header />
      <ProductList searchTerm={searchTerm} />
      <Footer />
    </Layout>
  );
}`;

const PropsDrillingVsStateOwnership = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <Appear priority={1}>
        <p style={{ fontSize: "1rem", color: "#dc2626", textAlign: "center", marginBottom: "1rem", fontWeight: 700 }}>
          ❌ State Lives Too High
        </p>
      </Appear>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
        <Appear priority={2}>
          <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden" }}>
            <CodePane language="jsx" theme={codeTheme} showLineNumbers={false}>
              {WRONG_CODE}
            </CodePane>
          </div>
        </Appear>

        <Appear priority={3}>
          <svg viewBox="0 0 200 140" style={{ width: "100%", height: "auto" }}>
            <defs>
              <marker id="arrowRed3" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                <path d="M0,0 L0,4 L5,2 z" fill="#dc2626" />
              </marker>
            </defs>

            <rect x="70" y="5" width="60" height="26" rx="4" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
            <text x="100" y="21" textAnchor="middle" fill="#7f1d1d" fontSize="10" fontWeight="700">App</text>

            <line x1="100" y1="31" x2="100" y2="48" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrowRed3)" />

            <rect x="70" y="48" width="60" height="22" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5" />
            <text x="100" y="62" textAnchor="middle" fill="#374151" fontSize="9">Layout</text>

            <line x1="65" y1="70" x2="40" y2="88" stroke="#9ca3af" strokeWidth="1.2" />
            <line x1="100" y1="70" x2="100" y2="88" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arrowRed3)" />
            <line x1="135" y1="70" x2="160" y2="88" stroke="#9ca3af" strokeWidth="1.2" />

            <rect x="15" y="88" width="40" height="22" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.2" />
            <text x="35" y="102" textAnchor="middle" fill="#374151" fontSize="8">Header</text>

            <rect x="64" y="88" width="70" height="22" rx="4" fill="#fca5a5" stroke="#dc2626" strokeWidth="2" />
            <text x="100" y="103" textAnchor="middle" fill="#7f1d1d" fontSize="9" fontWeight="700">ProductList</text>

            <rect x="145" y="88" width="40" height="22" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.2" />
            <text x="165" y="102" textAnchor="middle" fill="#374151" fontSize="8">Footer</text>

            <text x="100" y="130" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="600">🚩 Props drilling through Layout</text>
          </svg>
        </Appear>
      </div>
    </Box>
  );
};

export default PropsDrillingVsStateOwnership;
