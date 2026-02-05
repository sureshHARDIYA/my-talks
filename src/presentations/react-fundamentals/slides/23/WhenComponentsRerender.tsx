import { Appear, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { leroyTheme } from "@/theme/leroy";

const codeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "12px",
    lineHeight: "1.3",
    padding: "0.65rem",
    margin: 0,
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "12px",
    lineHeight: "1.3",
  },
};

const RERENDER_CODE = `function UtsettContainer() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <FasesContainer />
      <TiltakContainer />
      <MålkortContainer />
    </div>
  );
}`;

const WhenComponentsRerender = () => {
  return (
    <>
      <Appear priority={1}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto 1rem",
          padding: "0.1rem 1rem",
          background: "#dbeafe",
          border: `3px solid ${leroyTheme.linkBlue}`,
          borderRadius: 10,
          textAlign: "center"
        }}>
          <span style={{ fontSize: "1rem", fontWeight: 700, color: leroyTheme.linkBlue }}>
            💡 When props or state change → Component re-renders → ALL children re-render too!
          </span>
        </div>
      </Appear>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
        <Appear priority={2}>
          <div>
            <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden" }}>
              <CodePane language="jsx" theme={codeTheme} showLineNumbers={true}>
                {RERENDER_CODE}
              </CodePane>
            </div>
          </div>
        </Appear>

        <div>
          <Appear priority={3}>
            <div>
              <svg viewBox="0 0 340 290" style={{ width: "100%", height: "auto" }}>
                <defs>
                  <marker id="arrowRed2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#ef4444" />
                  </marker>
                </defs>

                {/* UtsettContainer */}
                <rect x="95" y="10" width="150" height="40" rx="6" fill="#ef4444" stroke="#dc2626" strokeWidth="2.5" />
                <text x="170" y="26" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">UtsettContainer</text>
                <text x="170" y="39" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="600">state changed</text>

                {/* Re-render label */}
                <text x="170" y="65" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="700">🔄 Re-renders!</text>

                {/* Arrows */}
                <line x1="120" y1="50" x2="55" y2="85" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRed2)" />
                <line x1="170" y1="50" x2="170" y2="85" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRed2)" />
                <line x1="220" y1="50" x2="285" y2="85" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRed2)" />

                {/* FasesContainer */}
                <rect x="5" y="85" width="100" height="42" rx="6" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                <text x="55" y="101" textAnchor="middle" fill="#7f1d1d" fontSize="9" fontWeight="700">Fases</text>
                <text x="55" y="113" textAnchor="middle" fill="#7f1d1d" fontSize="7.5">Container</text>
                <text x="55" y="123" textAnchor="middle" fill="#7f1d1d" fontSize="7">🌐 /api/faser</text>

                {/* TiltakContainer */}
                <rect x="120" y="85" width="100" height="42" rx="6" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                <text x="170" y="101" textAnchor="middle" fill="#7f1d1d" fontSize="9" fontWeight="700">Tiltak</text>
                <text x="170" y="113" textAnchor="middle" fill="#7f1d1d" fontSize="7.5">Container</text>
                <text x="170" y="123" textAnchor="middle" fill="#7f1d1d" fontSize="7">🌐 /api/tiltak</text>

                {/* MålkortContainer */}
                <rect x="235" y="85" width="100" height="42" rx="6" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                <text x="285" y="101" textAnchor="middle" fill="#7f1d1d" fontSize="9" fontWeight="700">Målkort</text>
                <text x="285" y="113" textAnchor="middle" fill="#7f1d1d" fontSize="7.5">Container</text>
                <text x="285" y="123" textAnchor="middle" fill="#7f1d1d" fontSize="7">🌐 /api/malkort</text>

                {/* All re-render label */}
                <text x="170" y="145" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="700">🔄 All children re-render!</text>

                {/* API calls */}
                <line x1="55" y1="127" x2="55" y2="160" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowRed2)" />
                <line x1="170" y1="127" x2="170" y2="160" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowRed2)" />
                <line x1="285" y1="127" x2="285" y2="160" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowRed2)" />

                {/* Server */}
                <rect x="70" y="160" width="200" height="38" rx="6" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" />
                <text x="170" y="182" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">🖥️ Server (3× API calls!)</text>

                {/* Problem indicators */}
                <rect x="10" y="215" width="320" height="58" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1" />
                <text x="170" y="232" textAnchor="middle" fill="#dc2626" fontSize="6.5" fontWeight="700">⚠️ Every button click triggers:</text>
                <text x="170" y="245" textAnchor="middle" fill="#7f1d1d" fontSize="6.5">💸 3× network requests • 3× server load</text>
                <text x="170" y="257" textAnchor="middle" fill="#7f1d1d" fontSize="6.5">⏱️ Slower app • 💰 Higher costs • 📈 Poor performance</text>
              </svg>
            </div>
          </Appear>
        </div>
      </div>
    </>
  );
};

export default WhenComponentsRerender;
