import { Deck } from "spectacle";

import theme from "@/utils/theme";

import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import DESTitle from "./slides/1/Title";
import { GeneralPrinciples } from "./slides/2/General";
import Summary from "./slides/last/Summary";
import { CHECKLIST_TITLE } from "./checklistTitles";

const UniversalDesignChecklist = () => {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <DESTitle />
      </TrygSlide>

      {CHECKLIST_TITLE.map((list) => (
        <TrygSlide backgroundColor="white" title={list.title} key={list.id}>
          <GeneralPrinciples keyName={list.key} />
        </TrygSlide>
      ))}

      <TrygSlide backgroundColor="white">
        <Summary />
      </TrygSlide>
    </Deck>
  );
};

export default UniversalDesignChecklist;
