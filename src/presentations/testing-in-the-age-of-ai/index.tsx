import { Deck } from "spectacle";

import LeroyHead from "@/presentations/leroy/LeroyHead";
import template from "@/theme/leroyTemplate";
import theme from "@/utils/leroySpectacleTheme";

import DbSlide from "./components/DbSlide";
import Title from "./slides/01/Title";
import WhyWeTest from "./slides/02/WhyWeTest";
import ThreeQuestions from "./slides/03/ThreeQuestions";
import Journey from "./slides/04/Journey";
import Discussion1 from "./slides/05/Discussion1";
import TestWhatHurts from "./slides/06/TestWhatHurts";
import WhereTestsRun from "./slides/07/WhereTestsRun";
import Discussion2 from "./slides/10/Discussion2";
import HowWeProceed from "./slides/11/HowWeProceed";

const TestingInTheAgeOfAi = () => (
  <LeroyHead title="Testing the right things in the age of AI · Suresh Kumar Mukhiya">
    <Deck template={template} suppressBackdropFallback={true} theme={theme}>
      <Title />

      <DbSlide number="1" title="Why do we test?">
        <WhyWeTest />
      </DbSlide>

      <DbSlide number="2" title="Which question are we asking?">
        <ThreeQuestions />
      </DbSlide>

      <DbSlide number="3" title="Dokumentbanken: the real journey">
        <Journey />
      </DbSlide>

      <DbSlide title="Your turn">
        <Discussion1 />
      </DbSlide>

      <DbSlide number="4" title="My starting list: what would hurt">
        <TestWhatHurts />
      </DbSlide>

      <DbSlide number="5" title="Where should these tests run?">
        <WhereTestsRun />
      </DbSlide>

      <DbSlide title="Your turn, again">
        <Discussion2 />
      </DbSlide>

      <DbSlide number="6" title="How we proceed now">
        <HowWeProceed />
      </DbSlide>
    </Deck>
  </LeroyHead>
);

export default TestingInTheAgeOfAi;
