import { Appear, Box, Heading } from "spectacle";

const ApiCallsSideEffects = () => (
  <Box padding="1.5rem 2.5rem">
    <Appear priority={1}>
      <Heading fontSize="h3" color="#0e7490" margin="0 0 1.2rem 0">
        7. API Calls & Side Effects
      </Heading>
      <Heading fontSize="h4" color="#0369a1" fontStyle="italic" margin="0 0 1.5rem 0">
        useEffect Is Not a Lifecycle Dumpster
      </Heading>
    </Appear>
    <Appear priority={2}>
      <Box as="section" margin="0 0 1.2rem 0">
        <Heading fontSize="22px" color="#dc2626" margin="0 0 0.5rem 0">Bad habits</Heading>
        <ul style={{ color: '#991b1b', fontSize: '1.1rem', marginLeft: 24 }}>
          <li>Multiple API calls in one component</li>
          <li>Business rules inside <code style={{ background: '#f1f5f9', color: '#0f172a', borderRadius: 4, padding: '0 4px' }}>useEffect</code></li>
          <li>Fetching on every render</li>
        </ul>
      </Box>
    </Appear>
    <Appear priority={3}>
      <Box as="section" margin="0 0 1.2rem 0">
        <Heading fontSize="20px" color="#0e7490" margin="0 0 0.5rem 0">Key rule</Heading>
        <div style={{
          background: '#e0f2fe',
          borderLeft: '5px solid #0ea5e9',
          padding: '0.7rem 1rem',
          fontSize: '1.1rem',
          color: '#0369a1',
          fontWeight: 600,
          borderRadius: 6,
          marginBottom: 8
        }}>
          Components should <b>consume data</b>, not own fetching logic
        </div>
      </Box>
    </Appear>
    <Appear priority={4}>
      <Box as="section" margin="0 0 1.2rem 0">
        <Heading fontSize="20px" color="#0e7490" margin="0 0 0.5rem 0">Better separation</Heading>
        <ul style={{ color: '#0f172a', fontSize: '1.1rem', marginLeft: 24 }}>
          <li><b>UI component</b> → renders</li>
          <li><b>Data hook</b> → fetches</li>
          <li><b>Service</b> → talks to API</li>
        </ul>
      </Box>
    </Appear>
    <Appear priority={5}>
      <Box as="section" margin="0 0 1.2rem 0">
        <Heading fontSize="20px" color="#0e7490" margin="0 0 0.5rem 0">Mental model</Heading>
        <div style={{
          background: '#f1f5f9',
          borderLeft: '5px solid #0ea5e9',
          padding: '0.7rem 1rem',
          fontSize: '1.1rem',
          color: '#0f172a',
          fontStyle: 'italic',
          borderRadius: 6
        }}>
          “If I remove React, my data logic should still make sense.”
        </div>
      </Box>
    </Appear>
  </Box>
);

export default ApiCallsSideEffects;
