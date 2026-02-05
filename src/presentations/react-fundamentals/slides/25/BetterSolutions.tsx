import { Appear, Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { leroyTheme } from "@/theme/leroy";

const codeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "10px",
    lineHeight: "1.35",
    padding: "0.75rem",
    margin: 0,
  },
  'code[class*="language-"]': {
      ...tomorrow['code[class*="language-"]'],
      fontSize: "9px",
      lineHeight: "1.3",
    },
};

const CONTEXT_SOLUTION = `
const UserContext = createContext();
function App() {
  const [user, setUser] = useState({ name: "Alice" });

  return (
    <UserContext.Provider value={user}>
      <Dashboard />  {/* No props! */}
    </UserContext.Provider>
  );
}
// 2. Deep component uses context directly
function UserProfile() {
  const user = useContext(UserContext);
  return <div>Welcome, {user.name}!</div>;
}`;

const COMPOSITION_SOLUTION = `
function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
function App() {
  const user = { name: "Alice" };
  return (
    <Dashboard>
      <UserProfile user={user} />
    </Dashboard>
  );
}`;

const STATE_SOLUTION = `// ❌ Bad: Unnecessary state
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  // Keeping two states in sync is error-prone!
}

// ✅ Good: Derive from existing state
function TodoList() {
  const [todos, setTodos] = useState([]);
  const completedCount = todos.filter(t => t.done).length;

  // Computed on-the-fly, always correct!
}`;

const BetterSolutions = () => {
  return (
    <Box padding="0.5rem 1.25rem">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "0.75rem" }}>
        {/* Solution 1: Context */}
        <Appear priority={2}>
          <div>
            <div style={{
              padding: "0.5rem",
              background: "#dcfce7",
              borderRadius: "6px 6px 0 0",
              borderBottom: `2px solid #22c55e`
            }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#166534", margin: 0, textAlign: "center" }}>
                Solution 1: Context API
              </p>
            </div>
            <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" }}>
              <CodePane language="jsx" theme={codeTheme} showLineNumbers={true}>
                {CONTEXT_SOLUTION}
              </CodePane>
            </div>
            <p style={{ fontSize: "0.75rem", color: leroyTheme.grey60, marginTop: "0.25rem", textAlign: "center" }}>
              For deeply nested shared data
            </p>
          </div>
        </Appear>

        {/* Solution 2: Composition */}
        <Appear priority={3}>
          <div>
            <div style={{
              padding: "0.5rem",
              background: "#dbeafe",
              borderRadius: "6px 6px 0 0",
              borderBottom: `2px solid #3b82f6`
            }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e40af", margin: 0, textAlign: "center" }}>
                Solution 2: Composition
              </p>
            </div>
            <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" }}>
              <CodePane language="jsx" theme={codeTheme} showLineNumbers={true}>
                {COMPOSITION_SOLUTION}
              </CodePane>
            </div>
            <p style={{ fontSize: "0.75rem", color: leroyTheme.grey60, marginTop: "0.25rem", textAlign: "center" }}>
              Use children prop to avoid drilling
            </p>
          </div>
        </Appear>

        {/* Solution 3: Avoid unnecessary state */}
        <Appear priority={4}>
          <div>
            <div style={{
              padding: "0.5rem",
              background: "#fef3c7",
              borderRadius: "6px 6px 0 0",
              borderBottom: `2px solid #f59e0b`
            }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#92400e", margin: 0, textAlign: "center" }}>
                Solution 3: Derive State
              </p>
            </div>
            <div style={{ border: `1px solid ${leroyTheme.grey20}`, borderTop: "none", borderRadius: "0 0 6px 6px", overflow: "hidden" }}>
              <CodePane language="jsx" theme={codeTheme} showLineNumbers={true}>
                {STATE_SOLUTION}
              </CodePane>
            </div>
            <p style={{ fontSize: "0.75rem", color: leroyTheme.grey60, marginTop: "0.25rem", textAlign: "center" }}>
              Compute values instead of storing
            </p>
          </div>
        </Appear>
      </div>

      <Appear priority={5}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "0.75rem 1rem",
          background: "#eff6ff",
          border: `2px solid ${leroyTheme.linkBlue}`,
          borderRadius: 8
        }}>
          <p style={{ fontSize: "0.9rem", color: leroyTheme.linkBlue, fontWeight: 600, margin: 0, textAlign: "center" }}>
            💡 Key Takeaway: Minimize state, avoid props drilling, use the right tool for the job!
          </p>
        </div>
      </Appear>
    </Box>
  );
};

export default BetterSolutions;
