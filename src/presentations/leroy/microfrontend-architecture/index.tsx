import { Deck } from "spectacle";

import LeroyHead from "@/presentations/leroy/LeroyHead";
import theme from "@/utils/leroySpectacleTheme";
import template from "@/theme/leroyTemplate";
import { TrygSlide } from "@/components/TrygSlide";

import Title from "./Title";
import WebsiteRendered from "@/presentations/react-fundamentals/slides/03/WebsiteRendered";
import BrowserRenderingProcess from "@/presentations/react-fundamentals/slides/04/BrowserRenderingProcess";
import PhpVsReact from "@/presentations/react-fundamentals/slides/05/PhpVsReact";
import TraditionalVsSpa from "@/presentations/react-fundamentals/slides/06/TraditionalVsSpa";
import WhySpaReact from "@/presentations/react-fundamentals/slides/07/WhySpaReact";
import TheBigQuestion from "@/presentations/react-fundamentals/slides/08/TheBigQuestion";
import ReactMentalModel from "@/presentations/react-fundamentals/slides/09/ReactMentalModel";
import VirtualDomIntro from "@/presentations/react-fundamentals/slides/10/VirtualDomIntro";
import VirtualDomComparison from "@/presentations/react-fundamentals/slides/11/VirtualDomComparison";
import WhenComponentsRerender from "@/presentations/react-fundamentals/slides/12/WhenComponentsRerender";
import PropsDrillingProblem from "@/presentations/react-fundamentals/slides/13/PropsDrillingProblem";
import BetterSolutions from "@/presentations/react-fundamentals/slides/14/BetterSolutions";
import PropsDrillingVsStateOwnership from "@/presentations/react-fundamentals/slides/15/PropsDrillingVsStateOwnership";
import CorrectStateOwnership from "@/presentations/react-fundamentals/slides/16/CorrectStateOwnership";
import Agenda from "@/presentations/react-fundamentals/slides/02/Agenda";
import Summary from "@/presentations/react-fundamentals/slides/22/Summary";
import SummaryPart2 from "@/presentations/react-fundamentals/slides/23/SummaryPart2";
import ApiCallsSideEffects from "@/presentations/react-fundamentals/slides/17/ApiCallsSideEffects";
import DomManipulationNuclearOption from "@/presentations/react-fundamentals/slides/21/DomManipulationNuclearOption";
import UseEffectDependencies from "@/presentations/react-fundamentals/slides/18/UseEffectDependencies";
import UseEffectAntiPatterns from "@/presentations/react-fundamentals/slides/19/UseEffectAntiPatterns";
import RecommendedApproachTanstack from "@/presentations/react-fundamentals/slides/20/RecommendedApproachTanstack";

const MicrofrontendArchitectureInLeroy = () => {
  return (
    <LeroyHead title="Microfrontend Architecture in Lerøy · Lerøy Seafood Group">
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
    </LeroyHead>
  );
};

export default MicrofrontendArchitectureInLeroy;
