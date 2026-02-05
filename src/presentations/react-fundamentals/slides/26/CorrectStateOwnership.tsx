import { Appear, Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

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

const CORRECT_CODE = `
function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  return ( <div> {/* ... */} </div>);
}
function App() {
  return (
    <Layout>
      <Header />
      <ProductList />
      <Footer />
    </Layout>
  );
}`;

const CorrectStateOwnership = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <Appear priority={1}>
        <p style={{ fontSize: "1rem", color: "#16a34a", textAlign: "center", marginBottom: "1rem", fontWeight: 700 }}>
          ✅ State Lives Where Needed
        </p>
      </Appear>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
        <Appear priority={2}>
          <div style={{ border: `1px solid #bbf7d0`, borderRadius: 8, overflow: "hidden" }}>
            <CodePane language="jsx" theme={codeTheme} showLineNumbers={false}>
              {CORRECT_CODE}
            </CodePane>
          </div>
        </Appear>
        <Appear priority={3}>
          <svg viewBox="0 0 200 140" style={{ width: "100%", height: "auto" }}>
            <defs>
              <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
                <path d="M0,0 L0,4 L5,2 z" fill="#16a34a" />
              </marker>
            </defs>
            <rect x="70" y="5" width="60" height="26" rx="4" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
            <text x="100" y="21" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="700">App</text>
            <line x1="100" y1="31" x2="100" y2="48" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
            <rect x="70" y="48" width="60" height="22" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5" />
            <text x="100" y="62" textAnchor="middle" fill="#374151" fontSize="9">Layout</text>
            <line x1="65" y1="70" x2="40" y2="88" stroke="#9ca3af" strokeWidth="1.2" />
            <line x1="100" y1="70" x2="100" y2="88" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
            <line x1="135" y1="70" x2="160" y2="88" stroke="#9ca3af" strokeWidth="1.2" />
            <rect x="15" y="88" width="40" height="22" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.2" />
            <text x="35" y="102" textAnchor="middle" fill="#374151" fontSize="8">Header</text>
            <rect x="65" y="88" width="70" height="22" rx="4" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
            <text x="100" y="103" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="700">ProductList</text>
            <rect x="145" y="88" width="40" height="22" rx="4" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.2" />
            <text x="165" y="102" textAnchor="middle" fill="#374151" fontSize="8">Footer</text>
            <rect x="90" y="115" width="20" height="12" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" />
            <text x="100" y="124" textAnchor="middle" fill="#166534" fontSize="7" fontWeight="600">state</text>
            <text x="100" y="137" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="600">✅ State owned by ProductList</text>
          </svg>
        </Appear>
      </div>
      <Appear priority={4}>
        <div style={{
          margin: "1rem auto 0",
          padding: "0.6rem 1rem",
          background: "#dcfce7",
          border: "2px solid #16a34a",
          borderRadius: 6,
          maxWidth: 900
        }}>
          <p style={{ fontSize: "0.85rem", color: "#166534", fontWeight: 600, margin: 0, textAlign: "center" }}>
            State is colocated with the component that needs it. No unnecessary props drilling!
          </p>
        </div>
      </Appear>
    </Box>
  );
};

export default CorrectStateOwnership;
