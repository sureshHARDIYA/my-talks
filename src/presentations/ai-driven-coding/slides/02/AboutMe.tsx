import { Appear, Box } from "spectacle";
import "@xyflow/react/dist/style.css";

import { leroyTheme } from "@/theme/leroy";

type Milestone = {
  id: string;
  year: string;
  title: string;
  detail: string;
  color: string;
};

const MILESTONES: Milestone[] = [
  {
    id: "m1",
    year: "2014",
    title: "Moved to Norway",
    detail: "From Nepal 🇳🇵",
    color: "#94a3b8",
  },
  {
    id: "m2",
    year: "2016",
    title: "Masters",
    detail: "Information System · NTNU, Trondheim",
    color: "#3b82f6",
  },
  {
    id: "m3",
    year: "2021",
    title: "PhD",
    detail: "Software Engineering · HVL, Bergen",
    color: "#6366f1",
  },
  {
    id: "m4",
    year: "2026",
    title: "Tech Lead",
    detail: "Lerøy Seafood Group",
    color: "#16a34a",
  },
];


const facts = [
  "2O14: Moved to Norway from Nepal 🇳🇵",
  "2016: Masters in Information System from NTNU, Trondheim",
  "2021: PhD in Software Engineering from HVL, Bergen",
  "2021-2025: Software Developer/Tech Lead at Tryg Forsikring",
  "2026: Tech Lead at Lerøy Seafood Group",
  "Started as developer in 2008 — 17+ years in software development",
  "Married, 2 kids (Daughter (7), Son (3)), living in Bergen",
  "Photography · fishing · hiking · cooking · traveling",
  "Focus: Software Architecture · Frontend/Tooling  · Automation/AI-driven development",
];

const AboutMe = () => {

  return (
    <Box padding="0.5rem 1.5rem">
      <div style={{ display: "grid", gap: "0.4rem" }}>
        {facts.map((f, idx) => (
          <Appear key={f} priority={MILESTONES.length + 2 + idx}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.55rem 0.85rem",
                background:
                  idx % 2 === 0 ? leroyTheme.grey0 : leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: leroyTheme.linkBlue,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.9rem",
                  color: leroyTheme.grey80,
                }}
              >
                {f}
              </span>
            </div>
          </Appear>
        ))}
      </div>
    </Box >
  );
};

export default AboutMe;
