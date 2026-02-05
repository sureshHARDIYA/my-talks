import { Box, Heading } from "spectacle";
import { leroyTheme } from "@/theme/leroy";

const takeaways = [
  "Think in small, single-purpose components.",
  "Keep state close; use Context or data libs when many need it.",
  "Fetch data in one place; avoid useEffect in every component.",
  "Let React own the DOM — state → JSX, no manual getElementById.",
  "One main component per file; keep files short and navigable.",
];

const Summary = () => {
  return (
    <Box padding="0 2rem">
      <Heading color={leroyTheme.linkBlue} fontSize="28px" marginBottom="1rem">
        Takeaways
      </Heading>
      <ul style={{ listStyle: "disc", paddingLeft: "2rem", fontSize: "20px" }}>
        {takeaways.map((t) => (
          <li key={t} style={{ marginBottom: "0.5rem", color: leroyTheme.black }}>
            {t}
          </li>
        ))}
      </ul>
      <Heading
        color={leroyTheme.linkBlue}
        fontSize="22px"
        marginTop="2rem"
        marginBottom="0.5rem"
      >
        Resources
      </Heading>
      <ul className="flex gap-4 flex-col color-blue-900" style={{ fontSize: "18px" }}>
        <li>
          <p-link-pure href="https://react.dev/learn" target="_blank">
            React docs — Learn React
          </p-link-pure>
        </li>
        <li>
          <p-link-pure href="https://react.dev/learn/thinking-in-react" target="_blank">
            Thinking in React
          </p-link-pure>
        </li>
        <li>
          <p-link-pure href="https://tanstack.com/query/latest" target="_blank">
            TanStack Query (data fetching)
          </p-link-pure>
        </li>
      </ul>
    </Box>
  );
};

export default Summary;
