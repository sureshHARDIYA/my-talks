import { Appear, Box, CodePane, Heading } from "spectacle";
import leroyCodeTheme from "../../helper/theme";

const DomManipulationNuclearOption = () => (
  <Box>
    <div className="grid grid-cols-2 gap-6 w-full" style={{ marginBottom: "0.75rem" }}>
      <Appear priority={1}>
        <Box as="section">
          <CodePane language="js" theme={leroyCodeTheme} showLineNumbers={false}>
            {`document.getElementById("value").innerText = "999";`}
          </CodePane>
          <div style={{ marginTop: "0.35rem", fontSize: "1rem", color: "#0f172a" }}>
            When you manually manipulate the DOM:
          </div>
          <ul style={{ color: "#0f172a", fontSize: "1rem", marginLeft: 20, marginTop: "0.25rem" }}>
            <li>React’s Virtual DOM and real DOM go out of sync</li>
            <li>React loses control</li>
            <li>Bugs appear that are hard to debug</li>
          </ul>
        </Box>
      </Appear>

      <Appear priority={2}>
        <Box as="section">
          <ul style={{ color: "#7f1d1d", fontSize: "1rem", marginLeft: 20 }}>
            <li>UI randomly resets</li>
            <li>State and UI don’t match</li>
            <li>Event handlers stop working</li>
            <li>Re-renders overwrite your changes</li>
            <li>Memory leaks & unexpected behavior</li>
          </ul>
        </Box>
      </Appear>
    </div>

    <div className="grid grid-cols-3 gap-4 w-full">
      <Appear priority={3}>
        <Box>
          <Heading fontSize="10px" color="#b91c1c" margin="0 0 0.35rem 0">
            🚨 Bad  (DO NOT DO THIS)
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {`function Counter() {
  const count = 0;
  function hackDom() {
    document.getElementById("value").innerText = "999";
  }
  return (
    <>
      <p id="value">{count}</p>
      <button onClick={hackDom}>Hack DOM</button>
    </>
  );
}`}
          </CodePane>
          <div style={{ fontSize: "0.95rem", color: "#b91c1c", marginTop: "0.35rem" }}>
            👉 React still thinks count = 0
            <br />
            👉 Next render will overwrite your manual change
          </div>
        </Box>
      </Appear>
      <Appear priority={4}>
        <Box>
          <Heading fontSize="18px" color="#0f172a" margin="0 0 0.35rem 0">
            🔁 What React Does Next
          </Heading>
          <ul style={{ color: "#0f172a", fontSize: "1rem", marginLeft: 20, marginBottom: "0.5rem" }}>
            <li>You manually change the DOM → 999</li>
            <li>React re-renders (state/props change)</li>
            <li>React says: “DOM is wrong, fixing it”</li>
            <li>Value snaps back to 0</li>
          </ul>
          <div style={{ fontSize: "1rem", color: "#b91c1c", fontWeight: 600 }}>
            💣 Your change never really existed
          </div>
        </Box>
      </Appear>
      <Appear priority={5}>
        <Box>
          <Heading fontSize="18px" color="#0f172a" margin="0 0 0.35rem 0">
            ✅ Correct React Way (state or useRef)
          </Heading>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(999)}>
        Update Safely
      </button>
    </>
  );
}`}
          </CodePane>
        </Box>
      </Appear>
    </div>
  </Box>
);

export default DomManipulationNuclearOption;
