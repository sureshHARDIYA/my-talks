import { TTable, TTD, TTR } from "@/components/Shared/Table";
import { useSteps } from "spectacle";

const Consquences = () => {
  const { step, placeholder } = useSteps(2);

  return (
    <>
      {placeholder}
      {step >= 1 && (
        <TTable color="secondary" id="owasp">
          <tbody>
            <TTR>
              <TTD>
                There is no publicly fixed minimum or maximum—each case is
                evaluated individually. Daily fines begin to accrue immediately
                until the site becomes accessible ({" "}
                <a
                  href="https://aiopsgroup.com/accessibility-legislation-norway/"
                  className="text-blue-500"
                >
                  aiopsgroup.com
                </a>
                )
              </TTD>
            </TTR>
            <TTR>
              <TTD>
                Scandinavian Airlines (SAS) – Norway & USA (2017–2018). DIFI
                (former Directorate for Digitization) reviewed SAS’s main website
                in late 2017 and ruled it “impossible to use.” When SAS failed to
                fix the issues in time, fines of approximately €15,000 per day
                were threatened.{" "}
                <a
                  href="https://dev.to/chris_devto/scandinavian-airlines-were-fined-100000-for-accessibility-bugs-1lj1?utm_source=chatgpt.com"
                  className="text-blue-500"
                >
                  Read more ...{" "}
                </a>
              </TTD>
            </TTR>
            <TTR>
              <TTD>
                In the U.S., SAS paid $200,000 and were legally compelled to fix
                accessibility flaws.{" "}
                <a
                  href="https://www.levelaccess.com/blog/title-iii-lawsuits-10-big-companies-sued-over-website-accessibility/"
                  className="text-blue-500"
                >
                  Read more
                </a>
              </TTD>
            </TTR>
            <TTR>
              <TTD>Required Conformance level: WCAG 2.1 Level AA standards</TTD>
            </TTR>
          </tbody>
        </TTable>
      )}
    </>
  );
};

export default Consquences;
