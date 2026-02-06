import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

const leroyCodeTheme = {
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
        fontSize: "12px",
        lineHeight: "1.3",
      },
  };

export default leroyCodeTheme;