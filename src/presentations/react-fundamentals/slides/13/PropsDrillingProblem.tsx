import { Appear, Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { leroyTheme } from "@/theme/leroy";

const codeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "9px",
    lineHeight: "1.3",
    padding: "0.65rem",
    margin: 0,
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "9px",
    lineHeight: "1.3",
  },
};

const PROPS_DRILLING_CODE = `function App() {
  const [user, setUser] = useState({ name: "Alice", role: "admin" });
  return <Dashboard user={user} />;  
}
function Dashboard({ user }) {
  return <Sidebar user={user} />;
}
function Sidebar({ user }) {
  return <Menu user={user} />;
}
function Menu({ user }) {
  return <UserProfile user={user} />;
}
function UserProfile({ user }) {
  return <div>Welcome, {user.name}!</div>;  
}`;

const PropsDrillingProblem = () => {
  return (
    <Box padding="0.5rem 1.5rem">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
        {/* Code example */}
        <Appear priority={2}>
            <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderRadius: 8, overflow: "hidden" }}>
              <CodePane language="jsx" theme={codeTheme} showLineNumbers={false}>
                {PROPS_DRILLING_CODE}
              </CodePane>
            </div>
        </Appear>

        {/* Visualization */}
        <div>
          <Appear priority={3}>
            <div>
              <svg viewBox="0 0 300 310" style={{ width: "100%", height: "auto" }}>
                <defs>
                  <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L7,3 z" fill="#6b7280" />
                  </marker>
                </defs>
                <rect x="100" y="15" width="100" height="42" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <text x="150" y="33" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="700">App</text>
                <text x="150" y="46" textAnchor="middle" fill="#3b82f6" fontSize="8.5">has user data</text>

                {/* Arrow + label */}
                <line x1="150" y1="57" x2="150" y2="78" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
                <text x="165" y="70" fill="#dc2626" fontSize="9.5" fontWeight="600">user</text>

                {/* Dashboard */}
                <rect x="100" y="78" width="100" height="42" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
                <text x="150" y="96" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="600">Dashboard</text>
                <text x="150" y="109" textAnchor="middle" fill="#6b7280" fontSize="8">doesn't use user</text>

                <line x1="150" y1="120" x2="150" y2="141" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
                <text x="165" y="133" fill="#dc2626" fontSize="9.5" fontWeight="600">user</text>

                {/* Sidebar */}
                <rect x="100" y="141" width="100" height="42" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
                <text x="150" y="159" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="600">Sidebar</text>
                <text x="150" y="172" textAnchor="middle" fill="#6b7280" fontSize="8">doesn't use user</text>

                <line x1="150" y1="183" x2="150" y2="204" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
                <text x="165" y="196" fill="#dc2626" fontSize="9.5" fontWeight="600">user</text>

                {/* Menu */}
                <rect x="100" y="204" width="100" height="42" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
                <text x="150" y="222" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="600">Menu</text>
                <text x="150" y="235" textAnchor="middle" fill="#6b7280" fontSize="8">doesn't use user</text>

                <line x1="150" y1="246" x2="150" y2="267" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowGray)" />
                <text x="165" y="259" fill="#dc2626" fontSize="9.5" fontWeight="600">user</text>

                {/* UserProfile */}
                <rect x="100" y="267" width="100" height="42" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                <text x="150" y="285" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="700">UserProfile</text>
                <text x="150" y="298" textAnchor="middle" fill="#16a34a" fontSize="8">✓ uses user!</text>
              </svg>
            </div>
          </Appear>
        </div>
      </div>

      <Appear priority={4}>
        <div style={{
          maxWidth: 1000,
          margin: "0.75rem auto 0",
          padding: "0.5rem 0.75rem",
          background: "#fef2f2",
          border: "2px solid #dc2626",
          borderRadius: 6
        }}>
          <p style={{ fontSize: "0.8rem", color: "#dc2626", fontWeight: 600, margin: 0 }}>
            ❌ Problems: Maintenance nightmare • Lots of boilerplate • All middle components re-render when user changes
          </p>
        </div>
      </Appear>
    </Box>
  );
};

export default PropsDrillingProblem;
