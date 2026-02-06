import { Box, CodePane, Heading, Appear } from "spectacle";
import leroyCodeTheme from "../../helper/theme";

const USE_EFFECT_CODE = `const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

useEffect(() => {
  let cancelled = false;
  setIsLoading(true);
  setError(null);

  fetch("/api/products")
    .then((res) => res.json())
    .then((json) => {
      if (!cancelled) setData(json);
    })
    .catch((err) => {
      if (!cancelled) setError(err);
    })
    .finally(() => {
      if (!cancelled) setIsLoading(false);
    });

  return () => {
    cancelled = true;
  };
}, []);`;

const TANSTACK_CODE = `const { data, isLoading, error } = useQuery({
  queryKey: ["products"],
  queryFn: () => fetch("/api/products").then((r) => r.json()),
});`;

const RecommendedApproachTanstack = () => (
  <Box>
    <div className="grid grid-cols-2 gap-6 w-full"> 
      <Appear priority={1}>
      <Box>
        <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true} highlightRanges={[1,2,3, [5,21], 7, 8, [10,19], 13, 16, 19]}>
          {USE_EFFECT_CODE}
        </CodePane>
      </Box>
      </Appear>
      <Box>
      <Appear priority={2}>
        <CodePane language="jsx" theme={leroyCodeTheme} showLineNumbers={true} highlightRanges={[1,2,3]}>
          {TANSTACK_CODE}
        </CodePane>
      </Appear>
      <Appear priority={3}>
        <Box margin="0.75rem 0 0 0">
          <Heading fontSize="18px" color="#0f172a" margin="0 0 0.35rem 0">
            TanStack Query perks
          </Heading>
          <ul style={{ fontSize: "1rem", color: "#0f172a", marginLeft: 20 }}>
            <li>- Caching & request deduping: <code>queryKey</code></li>
            <li>- Background refetching: <code>queryFn</code></li>
            <li>- Stale-while-revalidate: <code>staleTime</code></li>
            <li>- Invalidation on mutations: <code>onSuccess</code></li>
            <li>- Built-in loading/error states: <code>isLoading</code>, <code>error</code></li>
          </ul>
        </Box>
      </Appear>
      </Box>
    </div>
  </Box>
);

export default RecommendedApproachTanstack;
