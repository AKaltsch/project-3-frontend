import TeamOneContainer from "./TeamOneContainer";
import TeamTwoContainer from "./TeamTwoContainer";

export default function TeamContainer({ teamOne, teamTwo }) {
    return (
        <div>
        <h2>Team One</h2>
        <div className="Team1-Container">
          <TeamOneContainer players={teamOne} />
        </div>
        <h2>Team Two</h2>
        <div>
          <TeamTwoContainer players={teamTwo} />
        </div>
        <button>Submit Teams</button>
      </div>
    )
}