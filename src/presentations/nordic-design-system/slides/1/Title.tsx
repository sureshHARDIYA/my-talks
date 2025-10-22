import { FlexBox, Heading } from "spectacle";

import { trygTheme } from "@/theme";
import StyledLink from "@/components/Core/StyledLink";

const DESTitle = () => {
  return (
    <>
      <FlexBox
        height="100%"
        flexDirection="column"
        backgroundColor={trygTheme.grey0}
      >
        <Heading
          margin="5rem"
          padding="3rem"
          fontSize="h2"
          backgroundColor={trygTheme.brand}
          color="white"
        >
          Nordic Design System Echosystem
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

export default DESTitle;
