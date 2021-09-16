import TeamCard from './TeamCard'

export default function TeamOneContainer({players, undraftTeamOnePlayer}) {
    return (
        players.map((player) => (
            <TeamCard key={player.id} player={player} undraftPlayer={undraftTeamOnePlayer}/>
        ))
    )
}