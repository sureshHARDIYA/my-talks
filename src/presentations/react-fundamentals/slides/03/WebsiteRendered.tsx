import { Appear, Box, CodePane } from "spectacle";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { leroyTheme } from "@/theme/leroy";

const codeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    fontSize: "14px",
    lineHeight: "1.2",
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    fontSize: "14px",
    lineHeight: "1.2",
  },
};

const WebsiteRendered = () => {
  return (
    <Box padding="0 1rem" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left column: browser mockup */}
      <div
        className="rounded-lg overflow-hidden border-2 shadow-lg"
        style={{
          borderColor: leroyTheme.grey20,
          maxWidth: "420px",
        }}
      >
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ background: leroyTheme.grey10 }}
        >
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#ff5f57" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#febc2e" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#28c840" }}
          />
          <span
            className="flex-1 text-center text-sm truncate"
            style={{ color: leroyTheme.grey60 }}
          >
            leroyseafood.com
          </span>
        </div>
        <div className="p-6 bg-white" style={{ minHeight: "120px" }}>
          <h1
            className="text-xl font-bold mb-2"
            style={{ color: leroyTheme.textBlue }}
          >
            Welcome to Lerøy Seafood Group
          </h1>
          <p className="text-base" style={{ color: leroyTheme.grey80 }}>
            Norsk sjømatpioner siden 1899. From fjord to table.
          </p>
        </div>
      </div>

      {/* Right column: HTML code (on enter) */}
      <Appear priority={1}>
        <Box>
          <p className="text-sm mb-1" style={{ color: leroyTheme.grey60 }}>
            The HTML that produces this:
          </p>
          <CodePane language="html" theme={codeTheme} showLineNumbers>
            {`<!DOCTYPE html>
<html>
<head><title>Lerøy</title></head>
<body>
  <h1>Welcome to Lerøy Seafood Group</h1>
  <p>Norsk sjømatpioner siden 1899. From fjord to table.</p>
</body>
</html>`}
          </CodePane>
        </Box>
      </Appear>
    </Box>
  );
};

export default WebsiteRendered;
