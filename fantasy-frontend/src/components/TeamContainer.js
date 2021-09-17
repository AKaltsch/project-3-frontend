import TeamOneContainer from './TeamOneContainer'
import TeamTwoContainer from './TeamTwoContainer'

export default function TeamContainer({ teamOne, teamTwo, undraftTeamOnePlayer, undraftTeamTwoPlayer }) {


    return (
        < div >
            <form>
                <h2>Team One</h2>
                <div className="Team1-Container">
                    <TeamOneContainer players={teamOne} undraftTeamOnePlayer={undraftTeamOnePlayer} />
                </div>

                <h2>Team Two</h2>
                <div className="Team2-Container">
                    <TeamTwoContainer players={teamTwo} undraftTeamTwoPlayer={undraftTeamTwoPlayer} />
                </div>
                <button type="submit">Submit Teams</button>
            </form>
        </div >
    )
}
