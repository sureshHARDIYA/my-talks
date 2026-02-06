import { TTD, TTR, TTable } from "@/components/Shared/Table";
import { Appear } from "spectacle";

const Agenda = () => {
  return (
    <Appear>
      <TTable color="secondary" id="react-agenda">
        <tbody>
          <TTR>
            <TTD>What we're fixing</TTD>
            <TTD>Vibe coding, giant files, props drilling, API chaos, DOM soup</TTD>
          </TTR>
          <TTR>
            <TTD>What React is</TTD>
            <TTD>Declarative UI library — components, state, composition</TTD>
          </TTR>
          <TTR>
            <TTD>Thinking in components</TTD>
            <TTD>Small pieces, single responsibility, reuse</TTD>
          </TTR>
          <TTR>
            <TTD>State & props</TTD>
            <TTD>Where state lives, avoiding props drilling</TTD>
          </TTR>
          <TTR>
            <TTD>Data fetching</TTD>
            <TTD>One place for data, not useEffects everywhere</TTD>
          </TTR>
          <TTR>
            <TTD>DOM & structure</TTD>
            <TTD>Let React own the DOM; file and folder habits</TTD>
          </TTR>
          <TTR>
            <TTD>Takeaways & resources</TTD>
            <TTD>Summary + links to keep learning</TTD>
          </TTR>
        </tbody>
      </TTable>
    </Appear>
  );
};

export default Agenda;
