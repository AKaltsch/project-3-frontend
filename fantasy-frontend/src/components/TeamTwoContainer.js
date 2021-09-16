import TeamCard from './TeamCard'

export default function TeamTwoContainer({players, undraftTeamTwoPlayer}) {
    return (
        players.map((player) => (
            <TeamCard key={player.id} player={player} undraftPlayer={undraftTeamTwoPlayer}/>
        ))
    )
}