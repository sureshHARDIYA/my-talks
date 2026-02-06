import { Appear, Box, CodePane, Heading } from "spectacle";
import leroyCodeTheme from "../../helper/theme";

const INFINITE_LOOP = `useEffect(() => {
  setCount(count + 1);
});`;

const INFINITE_WHY = `Why?
Effect updates state -> State triggers render -> 
Render triggers effect 
-> ♻ Loop forever`;

const FIX_LOOP = `useEffect(() => {
  setCount(c => c + 1);
}, []);`;

const FIX_LOOP_ALT = `Or:
Move logic to button click
Remove unnecessary effect`;

const FETCH_PATTERN = `useEffect(() => {
  async function load() {
    const res = await fetch("/api/data");
    setData(await res.json());
  }
  load();
}, []);`;

const FETCH_RULES = `Rules: ❌ Don’t make useEffect async`;

const DERIVED_BAD = `
useEffect(() => {
  setFullName(first + " " + last);
}, [first, last]);`;

const DERIVED_GOOD = `✅ Do This Instead
const fullName = first + " " + last;
Less code. No bugs. Faster.`;

const ANTI_PATTERNS = `🚫 Anti-Patterns (Vibe Coding Alert 😅)
❌ One effect doing everything
❌ Ignoring dependency warnings
❌ Effects for button clicks
❌ Business logic inside effects
❌ Multiple API calls in render`;

const BEST_PRACTICES = `✅ Best Practices
✔ One responsibility per effect
✔ Always include dependencies
✔ Cleanup side effects
✔ Prefer event handlers over effects
✔ Extract custom hooks`;

const UseEffectAntiPatterns = () => (
  <Box>
    <div className="grid grid-cols-3 gap-1 w-full">
      <Appear priority={1}>
        <Box>
          <Heading fontSize="14px" color="#b91c1c" margin="0 0 0.35rem 0">
            🚨 Common Mistake: Infinite Loop
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {INFINITE_LOOP}
          </CodePane>
          <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
            {INFINITE_WHY}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={2}>
        <Box>
          <Heading fontSize="14px" color="#0f172a" margin="0 0 0.35rem 0">
            ✅ Fix Infinite Loop
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {FIX_LOOP}
          </CodePane>
          <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
            {FIX_LOOP_ALT}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={3}>
        <Box>
          <Heading fontSize="14px" color="#0f172a" margin="0 0 0.35rem 0">
            🌐 Fetching Data – Correct Pattern
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {FETCH_PATTERN}
          </CodePane>
          <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
            {FETCH_RULES}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={4}>
        <Box>
          <Heading fontSize="14px" color="#b91c1c" margin="0 0 0.35rem 0">
            ❌ Don’t Use useEffect For This
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {DERIVED_BAD}
          </CodePane>
          <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
            {DERIVED_GOOD}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={5}>
        <Box>
          <Heading fontSize="14px" color="#b91c1c" margin="0 0 0.35rem 0">
            🚫 Anti-Patterns
          </Heading>
          <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
            {ANTI_PATTERNS}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={6}>
        <Box>
          <Heading fontSize="14px" color="#0f172a" margin="0 0 0.35rem 0">
            ✅ Best Practices
          </Heading>
          <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
            {BEST_PRACTICES}
          </CodePane>
        </Box>
      </Appear>
    </div>
  </Box>
);

export default UseEffectAntiPatterns;
