import { FlexBox, FullScreen, AnimatedProgress, Box, Image } from "spectacle";

import leroyLogo from "@/assets/leroy-logo.svg";
import { leroyTheme } from "@/theme/leroy";

const leroyTemplate = () => (
  <>
    <FlexBox justifyContent="space-between" position="absolute" top={0} width={1}>
      <Box padding="0 1em" />
      <Box padding="1em">
        <Image
          src={leroyLogo}
          alt="Lerøy Seafood Group"
          style={{ height: "28px", width: "auto" }}
        />
      </Box>
    </FlexBox>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen color={leroyTheme.linkBlue} />
      </Box>
      <Box padding="1em">
        <AnimatedProgress color={leroyTheme.linkBlue} />
      </Box>
    </FlexBox>
  </>
);

export default leroyTemplate;

