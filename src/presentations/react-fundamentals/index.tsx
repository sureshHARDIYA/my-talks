import { Deck } from "spectacle";

import theme from "@/utils/leroySpectacleTheme";
import template from "@/theme/leroyTemplate";
import { TrygSlide } from "@/components/TrygSlide";

import Title from "./slides/01/Title";
import WebsiteRendered from "./slides/03/WebsiteRendered";
import BrowserRenderingProcess from "./slides/04/BrowserRenderingProcess";
import PhpVsReact from "./slides/05/PhpVsReact";
import TraditionalVsSpa from "./slides/06/TraditionalVsSpa";
import WhySpaReact from "./slides/07/WhySpaReact";
import TheBigQuestion from "./slides/08/TheBigQuestion";
import ReactMentalModel from "./slides/09/ReactMentalModel";
import VirtualDomIntro from "./slides/10/VirtualDomIntro";
import VirtualDomComparison from "./slides/11/VirtualDomComparison";
import WhenComponentsRerender from "./slides/12/WhenComponentsRerender";
import PropsDrillingProblem from "./slides/13/PropsDrillingProblem";
import BetterSolutions from "./slides/14/BetterSolutions";
import PropsDrillingVsStateOwnership from "./slides/15/PropsDrillingVsStateOwnership";
import CorrectStateOwnership from "./slides/16/CorrectStateOwnership";
import Agenda from "./slides/02/Agenda";
import Summary from "./slides/22/Summary";
import SummaryPart2 from "./slides/23/SummaryPart2";
import ApiCallsSideEffects from "./slides/17/ApiCallsSideEffects";
import DomManipulationNuclearOption from "./slides/21/DomManipulationNuclearOption";
import UseEffectDependencies from "./slides/18/UseEffectDependencies";
import UseEffectAntiPatterns from "./slides/19/UseEffectAntiPatterns";
import RecommendedApproachTanstack from "./slides/20/RecommendedApproachTanstack";


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

      <TrygSlide title="New Elements to the page">
        <PhpVsReact />
      </TrygSlide>

      <TrygSlide title="When something changes: traditional vs SPA">
        <TraditionalVsSpa />
      </TrygSlide>

      <TrygSlide title="Why React?">
        <WhySpaReact />
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

      <TrygSlide title="Side-Effect & useEffect in React">
        <ApiCallsSideEffects />
      </TrygSlide>

      <TrygSlide title="Side-Effect & useEffect in React">
        <UseEffectDependencies />
      </TrygSlide>

      <TrygSlide title="Side-Effect & useEffect in React">
        <UseEffectAntiPatterns />
      </TrygSlide>

      <TrygSlide title="Recommended Approach - tanstack query">
        <RecommendedApproachTanstack />
      </TrygSlide>

      <TrygSlide title="Touching the DOM: Nuclear way">
        <DomManipulationNuclearOption />
      </TrygSlide>

      <TrygSlide title="Takeaways & resources (1/2)">
        <Summary />
      </TrygSlide>

      <TrygSlide title="Takeaways & resources (2/2)">
        <SummaryPart2 />
      </TrygSlide>
    </Deck>
  );
};

export default ReactFundamentals;
