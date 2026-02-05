import { FlexBox, Heading } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const Title = () => {
  return (
    <>
      <FlexBox
        height="100%"
        flexDirection="column"
        backgroundColor={leroyTheme.grey0}
      >
        <Heading
          margin="5rem"
          padding="3rem"
          fontSize="h2"
          backgroundColor={leroyTheme.linkBlue}
          color="white"
        >
          Let us <em>re</em>-act
        </Heading>
        <Heading margin="0px" color={leroyTheme.textBlueAlt} fontSize="22px">
          Beyond vibe coding — patterns that scales
        </Heading>
        <Heading
          margin="1.5rem 0 0"
          color={leroyTheme.grey60}
          fontSize="25px"
        >
          <kbd>
            Suresh Kumar Mukhiya |Tech Lead
            <br />
            <a
              href="mailto:suresh.mukhiya@leroyseafoodgroup.com"
              style={{ color: leroyTheme.textLinkBlue, textDecoration: "underline" }}
            >
              suresh.mukhiya@tryg.no
            </a>
          </kbd>
        </Heading>
      </FlexBox>
    </>
  );
};

export default Title;
