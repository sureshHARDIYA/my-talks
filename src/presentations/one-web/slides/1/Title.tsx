import { FlexBox, Heading } from "spectacle";

import { trygTheme } from "@/theme";
import StyledLink from "@/components/Core/StyledLink";

const OneWebTitle = () => {
  return (
    <>
      <FlexBox
        height="100%"
        flexDirection="column"
        backgroundColor={trygTheme.grey0}
      >
        <Heading
          margin="0px"
          padding="3rem"
          fontSize="h2"
          backgroundColor={trygTheme.brand}
          color="white"
        >
          Unified One Web
        </Heading>
        <Heading margin="50px 0 0 0" color={trygTheme.grey40} fontSize="35px">
          Nordic minside
        </Heading>
        <Heading margin="0px" color={trygTheme.grey40} fontSize="25px">
          <kbd>
            Suresh Kumar Mukhiya (<em>Platform Team</em>) <br />
            <StyledLink href="mailto:suresh.mukhiya@tryg.no">
              suresh.mukhiya@tryg.no
            </StyledLink>
          </kbd>
        </Heading>
      </FlexBox>
    </>
  );
};

export default OneWebTitle;
