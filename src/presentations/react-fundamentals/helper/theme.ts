import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

const leroyCodeTheme = {
  ...tomorrow,
  'pre[class*="language-"]': {
    ...tomorrow['pre[class*="language-"]'],
    color: "#f4f7fb",
    background: "#0f172a",
    borderRadius: "8px",
    fontSize: "10px",
    lineHeight: "1.35",
    padding: "0.75rem",
    margin: 0,
    overflow: "auto",
  },
  'code[class*="language-"]': {
    ...tomorrow['code[class*="language-"]'],
    color: "#f4f7fb",
    background: "transparent",
    fontSize: "12px",
    lineHeight: "1.3",
  },
  doctype: {
    color: "#a5b4fc",
  },
  punctuation: {
    color: "#cbd5e1",
  },
  tag: {
    color: "#7dd3fc",
  },
  string: {
    color: "#86efac",
  },
};

export default leroyCodeTheme;
