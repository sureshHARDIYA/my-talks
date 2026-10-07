import { Appear } from "spectacle";

import Footnote from "../../components/Footnote";
import Bridge from "../../components/Bridge";
import WorkflowFlow from "../../components/WorkflowFlow";

const NewWorkflow = () => (
  <div>
    <Appear priority={1}>
      <WorkflowFlow />
    </Appear>
    <Appear priority={2}>
      <Footnote>AI makes producing code easier. It does not remove the need for engineering judgement.</Footnote>
    </Appear>
    <Appear priority={3}>
      <Bridge>That is the theory. How far are we from it today?</Bridge>
    </Appear>
  </div>
);

export default NewWorkflow;
