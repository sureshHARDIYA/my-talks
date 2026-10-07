import DiscussionBlock from "../../components/DiscussionBlock";

const Discussion2 = () => (
  <DiscussionBlock
    minutes="4 min"
    question="How are we using AI for tests today, and how should we?"
    prompts={[
      "Who has let an agent write tests? Did you read them? Did they catch anything?",
      "What should an agent be given before it writes code: a spec, the risks, the journeys?",
      "What is the one thing we should start doing next sprint?",
    ]}
  />
);

export default Discussion2;
