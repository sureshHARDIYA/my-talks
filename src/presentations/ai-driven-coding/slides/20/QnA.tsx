import { Appear, Box, FlexBox } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const QnA = () => {
  return (
    <Box padding="1rem 2rem">
      <FlexBox
        flexDirection="column"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Appear priority={1}>
          <div
            style={{
              fontSize: "5rem",
              fontWeight: 900,
              color: leroyTheme.linkBlue,
              letterSpacing: "0.04em",
              marginBottom: "0.75rem",
            }}
          >
            Q&amp;A
          </div>
        </Appear>

        <Appear priority={2}>
          <div
            style={{
              fontSize: "1.6rem",
              color: leroyTheme.textBlue,
              fontStyle: "italic",
              marginBottom: "1.5rem",
            }}
          >
            Let's talk.
          </div>
        </Appear>

        <Appear priority={3}>
          <div
            style={{
              padding: "1rem 1.5rem",
              background: leroyTheme.grey0,
              border: `1px solid ${leroyTheme.grey20}`,
              borderRadius: 10,
              fontSize: "1rem",
              color: leroyTheme.grey80,
              textAlign: "center",
              lineHeight: 1.55,
            }}
          >
            <div style={{ fontWeight: 700, color: leroyTheme.textBlue }}>
              Suresh Kumar Mukhiya, PhD
            </div>
            <div>Tech Lead · Lerøy Seafood Group</div>
            <a
              href="mailto:suresh.mukhiya@leroyseafoodgroup.com"
              style={{
                color: leroyTheme.textLinkBlue,
                textDecoration: "underline",
              }}
            >
              suresh.mukhiya@leroyseafoodgroup.com
            </a>
          </div>
        </Appear>
      </FlexBox>
    </Box>
  );
};

export default QnA;
