import { Deck, FlexBox, Heading } from "spectacle";

import theme from "@/utils/theme";
import { trygTheme } from "@/theme";
import template from "@/theme/template";
import { TrygSlide } from "@/components/TrygSlide";
import { Link } from "react-router-dom";

const presentations = [
  {
    id: 1,
    title: "Web Components",
    path: "/web-components",
  },
  {
    id: 2,
    title: "Design System Echosystem",
    path: "/design-system-echosystem",
  },
  {
    id: 3,
    title: "Nordic Design System",
    path: "/nordic-design-system",
  },
  {
    id: 4,
    title: "Universal Design",
    path: "/universal-design",
  },
  {
    id: 5,
    title: "Universal Design Checklist",
    path: "/universal-design-checklist",
  },
  {
    id: 6,
    title: "One Portal Web Architecture",
    path: "/one-portal-web-architecture",
  },
];

export const MainGate = () => {
  return (
    <Deck template={template} theme={theme}>
      {/* Title Slide  1 */}
      <TrygSlide backgroundColor="white">
        <FlexBox
          height="100%"
          flexDirection="column"
          backgroundColor={trygTheme.grey0}
        >
          <Heading
            margin="1rem"
            fontSize="h3"
            backgroundColor={trygTheme.grey0}
            color="black"
          >
            Main Gate
          </Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {presentations?.map((item) => (
              <p-button-pure key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </p-button-pure>
            ))}
          </div>
        </FlexBox>
      </TrygSlide>
    </Deck>
  );
};
