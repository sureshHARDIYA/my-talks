import { Appear, CodePane } from "spectacle";
import sideEffectsImage from "@/assets/side-effects.png";
import leroyCodeTheme from "../../helper/theme";

const EFFECT_SNIPPET = `useEffect(() => {
  // side effect
  return () => {
    // cleanup (optional)
  };
}, [dependencies]);`;

const EFFECT_RULES = `When Does useEffect Run?

Runs after render
Does NOT block UI
Runs again when dependencies change`;

const ApiCallsSideEffects = () => (
  <div className="grid grid-cols-2 gap-4 w-full">
    <Appear priority={1}>
    <img
      src={sideEffectsImage}
      alt="What is a side effect"
      style={{ width: "600px", height: "auto", maxWidth: 980, margin: "0 auto", display: "block" }}
    />
    </Appear>
    <Appear priority={2}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true}>
            {EFFECT_SNIPPET}
          </CodePane>
        </div>
        <CodePane language="text" theme={leroyCodeTheme} showLineNumbers={false}>
          {EFFECT_RULES}
        </CodePane>
      </div>
    </Appear>
  </div>
);

export default ApiCallsSideEffects;
