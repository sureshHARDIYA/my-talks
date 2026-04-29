import { Deck, FlexBox, Heading, Slide } from "spectacle";
import { Link } from "react-router-dom";

import { leroyTheme } from "@/theme/leroy";
import leroyTemplate from "@/theme/leroyTemplate";
import leroySpectacleTheme from "@/utils/leroySpectacleTheme";

type Presentation = {
  id: string;
  title: string;
  path: string;
  CURRENT?: boolean;
};

const presentations = [
  {
    id: "01",
    title: "Web Components",
    path: "/web-components",
  },
  {
    id: "02",
    title: "Design System Echosystem",
    path: "/design-system-echosystem",
  },
  {
    id: "03",
    title: "Nordic Design System",
    path: "/nordic-design-system",
  },
  {
    id: "04",
    title: "Universal Design",
    path: "/universal-design",
  },
  {
    id: "05",
    title: "Universal Design Checklist",
    path: "/universal-design-checklist",
  },
  {
    id: "06",
    title: "One Portal Web Architecture",
    path: "/one-portal-web-architecture",
  },
  {
    id: "07",
    title: "Leroy React Fundamentals",
    path: "/react-fundamentals",
  },
  {
    id: "08",
    title: "Microfrontend Architecture in Lerøy",
    path: "/microfrontend-architecture-in-leroy",
    CURRENT: true,
  },
] satisfies Presentation[];

export const MainGate = () => {
  return (
    <Deck template={leroyTemplate} theme={leroySpectacleTheme}>
      <Slide backgroundColor={leroyTheme.grey0}>
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="stretch"
          justifyContent="flex-start"
          style={{
            padding: "2rem",
            gap: "2rem",
          }}
        >
          <Heading
            color={leroyTheme.textBlue}
            fontSize="h2"
            margin="0"
            textAlign="left"
          >
            Main Gate
          </Heading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1rem",
              width: "100%",
            }}
          >
            {presentations.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                style={{
                  alignItems: "center",
                  backgroundColor: item.CURRENT
                    ? leroyTheme.linkBlue
                    : leroyTheme.white,
                  border: `1px solid ${
                    item.CURRENT ? leroyTheme.linkBlue : leroyTheme.grey20
                  }`,
                  borderRadius: "16px",
                  color: item.CURRENT ? leroyTheme.white : leroyTheme.textBlue,
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  justifyContent: "center",
                  minHeight: "120px",
                  padding: "1rem",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </FlexBox>
      </Slide>
    </Deck>
  );
};
