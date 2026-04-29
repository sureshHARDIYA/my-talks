import { TTD, TTR, TTable } from "@/components/Shared/Table";
import { useSteps } from "spectacle";

const Agenda = () => {
  const { step, placeholder } = useSteps(2);

  return (
    <>
      {placeholder}
      {step >= 1 && (
        <TTable color="secondary" id="owasp">
          <tbody>
            <TTR>
              <TTD>Universal Design</TTD>
              <TTD>Universal Design vs Accessibility </TTD>
            </TTR>
            <TTR>
              <TTD>Principles of Universal Design</TTD>
              <TTD>
                Recap Principles of Universal Design and how to use them in your
                web components
              </TTD>
            </TTR>
            <TTR>
              <TTD>Legal Landscape and Compliance</TTD>
              <TTD>the legal implications of poor accessibility.</TTD>
            </TTR>
            <TTR>
              <TTD>Standards & Specifications</TTD>
              <TTD>
                the web accessibility standards and guidelines, including the W3C
                web accessibility initiative, WCAG, and WAI-ARIA.
              </TTD>
            </TTR>
            <TTR>
              <TTD>Screen Readers & Alt Text</TTD>
              <TTD>
                how screen readers convert digital text into synthesized speech.
              </TTD>
            </TTR>
            <TTR>
              <TTD>Semantic HTML</TTD>
              <TTD>the importance of using semantic HTML in your website.</TTD>
            </TTR>
            <TTR>
              <TTD>DIVs Are Not Buttons</TTD>
              <TTD>
                using the browser's built-in accessibility features is always
                recommended.
              </TTD>
            </TTR>
          </tbody>
        </TTable>
      )}
    </>
  );
};

export default Agenda;
