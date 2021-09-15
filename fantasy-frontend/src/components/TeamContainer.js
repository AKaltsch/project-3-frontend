import TeamOneContainer from './TeamOneContainer'
import TeamTwoContainer from './TeamTwoContainer'

export default function TeamContainer({ teamOne, teamTwo, handleSubmit }) {
  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
      <h2>Team One</h2>
        <label htmlFor="team-one">Team One</label>
          <div className="Team1-Container">
            <TeamOneContainer players={teamOne} />
          </div>

        <h2>Team Two</h2>
        <label htmlFor="team-two">Team Two</label>
        <div className="Team2-Container">
          <TeamTwoContainer players={teamTwo} />
        </div>
        <button type="submit">Submit Teams</button>
      </form>
    </div>
  )
}
