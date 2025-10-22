import { Deck } from "spectacle";

import theme from "@/utils/theme";
import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import OneWebTitle from "./slides/1/Title";

export const OneWeb = () => {
  return (
    <Deck template={template} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <OneWebTitle />
      </TrygSlide>
    </Deck>
  );
};
