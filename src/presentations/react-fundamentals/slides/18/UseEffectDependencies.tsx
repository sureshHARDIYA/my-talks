import { Appear, Box, CodePane, Heading } from "spectacle";
import leroyCodeTheme from "../../helper/theme";

const EMPTY_ARRAY = `useEffect(() => {
  fetchData();
}, []);`;

const WITH_DEPENDENCIES = `useEffect(() => {
  fetchUser(userId);
}, [userId]);`;

const NO_DEPENDENCIES = `useEffect(() => {
  console.log("Every render");
});`;

const CLEANUP = `useEffect(() => {
  const id = setInterval(() => {}, 1000);
  return () => clearInterval(id);
}, []);`;

const UseEffectDependencies = () => (
  <Box padding="0.5rem 1.5rem">
    <div className="grid grid-cols-2 gap-4 w-full">
      <Appear priority={1}>
        <Box>
          <Heading fontSize="18px" color="#0f172a" margin="0 0 0.35rem 0">
            1️⃣ Empty array []
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {EMPTY_ARRAY}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={2}>
        <Box>
          <Heading fontSize="18px" color="#0f172a" margin="0 0 0.35rem 0">
            2️⃣ With dependencies
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {WITH_DEPENDENCIES}
          </CodePane>
        </Box>
      </Appear>
      <Appear priority={3}>
        <Box>
          <Heading fontSize="18px" color="#b91c1c" margin="0 0 0.35rem 0">
            3️⃣ No dependency array ❌
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {NO_DEPENDENCIES}
          </CodePane>
          <div style={{ color: "#b91c1c", fontSize: "0.95rem", fontWeight: 600, marginTop: "0.35rem" }}>
            ❌ Runs after EVERY render&nbsp;&nbsp;&nbsp;❌ Almost always a bug
          </div>
        </Box>
      </Appear>
      <Appear priority={4}>
        <Box>
          <Heading fontSize="18px" color="#0f172a" margin="0 0 0.35rem 0">
            ♻️ Cleanup Function (VERY IMPORTANT)
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {CLEANUP}
          </CodePane>
          <div style={{ color: "#0f172a", fontSize: "0.95rem", marginTop: "0.35rem" }}>
            Cleanup runs:
            <div>Before effect runs again</div>
            <div>When component unmounts</div>
          </div>
        </Box>
      </Appear>
    </div>
  </Box>
);

export default UseEffectDependencies;
