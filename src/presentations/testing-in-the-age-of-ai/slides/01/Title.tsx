import { Slide } from "spectacle";

import leroyLogo from "@/assets/leroy-logo.svg";
import { db } from "../../components/theme";

/** Full-navy title slide, modelled on the PowerPoint master. */
const Title = () => (
  <Slide backgroundColor={db.navy} padding="0">
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2.5rem 3.5rem",
        fontFamily: db.sans,
        color: db.white,
        boxSizing: "border-box",
      }}
    >
      <img
        src={leroyLogo}
        alt="Lerøy Seafood Group"
        style={{ height: 64, width: "auto", alignSelf: "flex-start", marginBottom: "2.5rem" }}
      />
      <h1
        style={{
          margin: 0,
          fontFamily: db.serif,
          fontSize: "3.4rem",
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 820,
        }}
      >
        Testing the right things
        <br />
        in the age of AI
      </h1>
      <div style={{ marginTop: "1.1rem", fontSize: "1.25rem", color: db.onNavyMuted, maxWidth: 760 }}>
        Why we test, what we must not break in Applications, and how to proceed when code and tests are cheap
      </div>
      <div style={{ marginTop: "3rem", fontSize: "0.95rem", color: db.onNavyMuted }}>
        Suresh Kumar Mukhiya, PhD · Tech Lead · 2026
      </div>
    </div>
  </Slide>
);

export default Title;
