import { FlexBox, Heading } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const Title = () => {
  return (
    <FlexBox
      height="100%"
      flexDirection="column"
      backgroundColor={leroyTheme.grey0}
    >
      <Heading
        margin="3rem 5rem 0"
        padding="2.5rem"
        fontSize="h2"
        backgroundColor={leroyTheme.linkBlue}
        color="white"
      >
        AI-Driven Software Development
      </Heading>
      <Heading
        margin="0.75rem 0 0"
        color={leroyTheme.textBlueAlt}
        fontSize="22px"
      >
        How the industry has changed — and how you can be ready for it
      </Heading>
      <Heading margin="1.5rem 0 0" color={leroyTheme.grey60} fontSize="22px">
        <kbd>
          Suresh Kumar Mukhiya, PhD · Tech Lead
          <br />
          <a
            href="mailto:suresh.mukhiya@leroyseafoodgroup.com"
            style={{
              color: leroyTheme.textLinkBlue,
              textDecoration: "underline",
            }}
          >
            suresh.mukhiya@leroyseafoodgroup.com
          </a>
          <br />
          <span style={{ fontSize: "16px", color: leroyTheme.grey40 }}>
            2026
          </span>
        </kbd>
      </Heading>
    </FlexBox>
  );
};

export default Title;
