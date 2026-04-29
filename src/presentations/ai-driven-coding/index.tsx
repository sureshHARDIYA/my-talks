import { Deck } from "spectacle";

import LeroyHead from "@/presentations/leroy/LeroyHead";
import theme from "@/utils/leroySpectacleTheme";
import template from "@/theme/leroyTemplate";
import { TrygSlide } from "@/components/TrygSlide";

import Title from "./slides/01/Title";
import AboutMe from "./slides/02/AboutMe";
import Agenda from "./slides/03/Agenda";
import TheShift from "./slides/04/TheShift";
import WhatChanged from "./slides/05/WhatChanged";
import ThreeWaves from "./slides/06/ThreeWaves";
import CaseStudyIntro from "./slides/07/CaseStudyIntro";
import DependencyGuardianFlow2 from "./slides/10/DependencyGuardianFlow2";
import FeatureAgent from "./slides/11/FeatureAgent";
import TheInsight from "./slides/12/TheInsight";
import IndustryShift from "./slides/13/IndustryShift";
import PhdBucketsIntro from "./slides/14/PhdBucketsIntro";
import AiFluency from "./slides/15/AiFluency";
import WhatAgentsCantDo from "./slides/16/WhatAgentsCantDo";
import ShipThings from "./slides/17/ShipThings";
import PhdAdvantage from "./slides/18/PhdAdvantage";
import OneLastThought from "./slides/19/OneLastThought";
import QnA from "./slides/20/QnA";

const AiDrivenCoding = () => {
  return (
    <LeroyHead title="AI-Driven Software Development · Suresh Kumar Mukhiya">
      <Deck template={template} suppressBackdropFallback={true} theme={theme}>
        {/* Slide 01 - Title */}
        <TrygSlide backgroundColor="white">
          <Title />
        </TrygSlide>

        {/* Slide 02 - About me */}
        <TrygSlide title="About me">
          <AboutMe />
        </TrygSlide>

        {/* Slide 03 - Agenda */}
        <TrygSlide title="Agenda">
          <Agenda />
        </TrygSlide>

        {/* Slide 04 - The shift you're walking into */}
        <TrygSlide title="The shift you're walking into">
          <TheShift />
        </TrygSlide>

        {/* Slide 05 - What actually changed */}
        <TrygSlide title="What actually changed">
          <WhatChanged />
        </TrygSlide>

        {/* Slide 06 - Three waves of AI */}
        <TrygSlide title="Three waves of AI in software">
          <ThreeWaves />
        </TrygSlide>

        {/* Slide 07 - Lerøy case study + Agent 01 (Dependency Guardian) — animated flowchart */}
        <TrygSlide title="Lerøy · Agent 01 · Detect → Propose">
          <CaseStudyIntro />
        </TrygSlide>

        {/* Slide 10 - Dependency Guardian approval flow */}
        <TrygSlide title="Approve → Ship (or Loop Back)">
          <DependencyGuardianFlow2 />
        </TrygSlide>

        {/* Slide 11 - Feature Agent */}
        <TrygSlide title="Agent 02 · The Feature Agent">
          <FeatureAgent />
        </TrygSlide>

        {/* Slide 12 - The insight */}
        <TrygSlide title="The job moved up the stack">
          <TheInsight />
        </TrygSlide>

        {/* Slide 13 - Industry shift */}
        <TrygSlide title="What this means for the industry">
          <IndustryShift />
        </TrygSlide>

        {/* Slide 14 - PhD buckets intro */}
        <TrygSlide title="What PhD students should do">
          <PhdBucketsIntro />
        </TrygSlide>

        {/* Slide 15 - AI fluency */}
        <TrygSlide title="01 · Build AI fluency">
          <AiFluency />
        </TrygSlide>

        {/* Slide 16 - What agents can't do */}
        <TrygSlide title="02 · Double down on what agents can't replicate">
          <WhatAgentsCantDo />
        </TrygSlide>

        {/* Slide 17 - Ship things */}
        <TrygSlide title="03 · Ship things">
          <ShipThings />
        </TrygSlide>

        {/* Slide 18 - PhD advantage */}
        <TrygSlide title="Your PhD advantage">
          <PhdAdvantage />
        </TrygSlide>

        {/* Slide 19 - One last thought */}
        <TrygSlide title="One last thought">
          <OneLastThought />
        </TrygSlide>

        {/* Slide 20 - Q&A */}
        <TrygSlide backgroundColor="white">
          <QnA />
        </TrygSlide>
      </Deck>
    </LeroyHead>
  );
};

export default AiDrivenCoding;
