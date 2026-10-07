import DiscussionBlock from "../../components/DiscussionBlock";

const Discussion1 = () => (
  <DiscussionBlock
    minutes="3 min"
    question="When did green tests last lie to you?"
    prompts={[
      "What broke, and which layer would have caught it cheapest?",
      "Which of our applications has a journey nobody tests end to end today?",
      "Could we list the five to ten journeys we cannot afford to break?",
    ]}
  />
);

export default Discussion1;
