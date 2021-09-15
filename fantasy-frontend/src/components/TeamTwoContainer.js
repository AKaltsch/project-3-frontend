import TeamCard from './TeamCard'

export default function TeamTwoContainer({players}) {
    return (
        players.map((player) => (
            <TeamCard key={player.id} player={player} />
        ))
    )
}