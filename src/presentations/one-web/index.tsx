import { Deck, FlexBox } from "spectacle";

import theme from "@/utils/theme";
import { trygTheme } from "@/theme";
import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";

export const OneWeb = () => {
  return (
    <Deck template={template} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <FlexBox
          height="100%"
          flexDirection="column"
          backgroundColor={trygTheme.grey0}
        >
          comign soon...
        </FlexBox>
      </TrygSlide>
    </Deck>
  );
};
