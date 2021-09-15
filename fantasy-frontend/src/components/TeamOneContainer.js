import TeamCard from './TeamCard'

export default function TeamOneContainer({players}) {
    return (
        players.map((player) => (
            <TeamCard key={player.id} player={player} />
        ))
    )
}