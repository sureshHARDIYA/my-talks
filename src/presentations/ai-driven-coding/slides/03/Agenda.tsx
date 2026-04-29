import { Appear, Box } from "spectacle";

import { leroyTheme } from "@/theme/leroy";

const agenda = [
  {
    id: "01",
    duration: "3 min",
    title: "The shift you're walking into",
  },
  {
    id: "02",
    duration: "3 min",
    title: "Three waves of AI in software",
  },
  {
    id: "03",
    duration: "5 min",
    title: "Two production agents at Lerøy",
  },
  {
    id: "04",
    duration: "3 min",
    title: "What this means for the industry",
  },
  {
    id: "05",
    duration: "5 min",
    title: "What PhD students should do",
  },
  {
    id: "06",
    duration: "1 min",
    title: "Closing & Q&A",
  },
];

const Agenda = () => {
  return (
    <Box padding="0.5rem 2rem">
      <Appear priority={1}>
        <div
          style={{
            textAlign: "center",
            color: leroyTheme.grey60,
            fontSize: "0.95rem",
            marginBottom: "1rem",
          }}
        >
          What we'll cover · ~20–25 minutes · then Q&amp;A
        </div>
      </Appear>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "0.85rem",
        }}
      >
        {agenda.map((item, idx) => (
          <Appear key={item.id} priority={idx + 2}>
            <div
              style={{
                padding: "1rem",
                background: leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderRadius: 10,
                borderLeft: `4px solid ${leroyTheme.linkBlue}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: leroyTheme.linkBlue,
                  }}
                >
                  {item.id}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: leroyTheme.grey60,
                    background: leroyTheme.grey10,
                    padding: "2px 8px",
                    borderRadius: 999,
                  }}
                >
                  {item.duration}
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: leroyTheme.textBlue,
                  lineHeight: 1.35,
                }}
              >
                {item.title}
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </Box>
  );
};

export default Agenda;
