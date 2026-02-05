import { Deck } from "spectacle";

import theme from "@/utils/leroySpectacleTheme";
import template from "@/theme/leroyTemplate";
import { TrygSlide } from "@/components/TrygSlide";

import Title from "./slides/1/Title";
import WebsiteRendered from "./slides/18/WebsiteRendered";
import BrowserRenderingProcess from "./slides/19/BrowserRenderingProcess";
import PhpVsReact from "./slides/20/PhpVsReact";
import TraditionalVsSpa from "./slides/20/TraditionalVsSpa";
import TheBigQuestion from "./slides/22/TheBigQuestion";
import ReactMentalModel from "./slides/22/ReactMentalModel";
import VirtualDomIntro from "./slides/21/VirtualDomIntro";
import VirtualDomComparison from "./slides/21/VirtualDomComparison";
import WhenComponentsRerender from "./slides/23/WhenComponentsRerender";
import PropsDrillingProblem from "./slides/24/PropsDrillingProblem";
import BetterSolutions from "./slides/25/BetterSolutions";
import PropsDrillingVsStateOwnership from "./slides/26/PropsDrillingVsStateOwnership";
import CorrectStateOwnership from "./slides/26/CorrectStateOwnership";
import Agenda from "./slides/2/Agenda";
import Summary from "./slides/16/Summary";
import ApiCallsSideEffects from "./slides/27/ApiCallsSideEffects";


const ReactFundamentals = () => {
  return (
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      <TrygSlide backgroundColor="white">
        <Title />
      </TrygSlide>

      <TrygSlide title="Agenda">
        <Agenda />
      </TrygSlide>

      <TrygSlide title="How a website is rendered">
        <WebsiteRendered />
      </TrygSlide>

      <TrygSlide title="How the browser renders the page">
        <BrowserRenderingProcess />
      </TrygSlide>

      <TrygSlide title="Single page application vs traditional applications">
        <PhpVsReact />
      </TrygSlide>

      <TrygSlide title="When something changes: traditional vs SPA">
        <TraditionalVsSpa />
      </TrygSlide>

      <TrygSlide title="The Big Question">
        <TheBigQuestion />
      </TrygSlide>

      <TrygSlide title="React's Mental Model">
        <ReactMentalModel />
      </TrygSlide>

      <TrygSlide title="How does React know what changed?">
        <VirtualDomIntro />
      </TrygSlide>

      <TrygSlide title="React compares and updates">
        <VirtualDomComparison />
      </TrygSlide>

      <TrygSlide title="When Components Re-render">
        <WhenComponentsRerender />
      </TrygSlide>

      <TrygSlide title="Props Drilling Problem">
        <PropsDrillingProblem />
      </TrygSlide>

      <TrygSlide title="Better Solutions">
        <BetterSolutions />
      </TrygSlide>


      <TrygSlide title="Props Drilling Is a Symptom, Not the Disease (1/2)">
        <PropsDrillingVsStateOwnership />
      </TrygSlide>

      <TrygSlide title="State Should Live Where Needed (2/2)">
        <CorrectStateOwnership />
      </TrygSlide>

      <TrygSlide title="API Calls & Side Effects">
        <ApiCallsSideEffects />
      </TrygSlide>

      <TrygSlide title="Takeaways & resources">
        <Summary />
      </TrygSlide>
    </Deck>
  );
};

export default ReactFundamentals;
