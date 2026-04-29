import { useSteps } from "spectacle";

import { TTable, TTR, TTD } from "../components/Shared/Table";

const Agenda = () => {
  const { step, placeholder } = useSteps(2);

  return (
    <>
      {placeholder}
      {step >= 1 && (
        <TTable color="secondary" id="owasp">
          <tbody>
            <TTR>
              <TTD>
                Getting started with <kbd>@trygno-ui</kbd>
              </TTD>
              <TTD>
                Create your first web component using <kbd>StencilJS</kbd>
              </TTD>
            </TTR>
            <TTR>
              <TTD>
                Providing Properties <kbd>(@Prop)</kbd>
              </TTD>
              <TTD>How to provide properties to your web components</TTD>
            </TTR>
            <TTR>
              <TTD>
                Internal State <kbd>(@State)</kbd>
              </TTD>
              <TTD>Using internal state in your web components</TTD>
            </TTR>
            <TTR>
              <TTD>Lifecycle methods and events</TTD>
              <TTD>
                How to use lifecycle methods and events in your web components
              </TTD>
            </TTR>
            <TTR>
              <TTD>Styling</TTD>
              <TTD>Things to consider when styling your web components</TTD>
            </TTR>
            <TTR>
              <TTD>Publishing & using the components</TTD>
              <TTD>
                How to publish your web components to <kbd>nexus</kbd> and use
                them in your projects
              </TTD>
            </TTR>
            <TTR>
              <TTD>Challenges</TTD>
              <TTD>Lessons learned, challenges</TTD>
            </TTR>
            <TTR>
              <TTD>
                <kbd>Widgets</kbd>
              </TTD>
              <TTD>
                Can we create widgets entirely in <kbd>StencilJS?</kbd>
              </TTD>
            </TTR>
          </tbody>
        </TTable>
      )}
    </>
  );
};

export default Agenda;
