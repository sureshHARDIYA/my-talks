import { TTD, TTR, TTable } from "@/components/Shared/Table";
import { useSteps } from "spectacle";

const Agenda2 = () => {
  const { step, placeholder } = useSteps(2);

  return (
    <>
      {placeholder}
      {step >= 1 && (
        <TTable color="secondary" id="owasp">
          <tbody>
            <TTR>
              <TTD>Keyboard-Only & Tabbing</TTD>
              <TTD>The tabindex attribute and tab trapping</TTD>
            </TTR>
            <TTR>
              <TTD>ARIA Labels & Descriptions</TTD>
              <TTD>
                behavior of ARIA labels and descriptions and the differences
                between the WAI-ARIA and WCAG specs
              </TTD>
            </TTR>
            <TTR>
              <TTD>ARIA Roles & Live Regions</TTD>
              <TTD>
                ARIA roles can be applied to elements, giving screen readers a
                context for their use
              </TTD>
            </TTR>
            <TTR>
              <TTD>Accessibility Tools</TTD>
              <TTD>
                several accessibility tools for running manual accessibility tests
                or automating tests within a CI/CD pipeline.
              </TTD>
            </TTR>
            <TTR>
              <TTD>More on UU</TTD>
              <TTD>Resources and courses on Universal Design </TTD>
            </TTR>
            <TTR>
              <TTD>
                <del>Wrapping up with styling web components</del>
              </TTD>
              <TTD>
                How to style web components <sub>(Future session...)</sub>{" "}
              </TTD>
            </TTR>
          </tbody>
        </TTable>
      )}
    </>
  );
};

export default Agenda2;
