import PlayerCard from './PlayerCard'

export default function PlayerContainer({ players }){
   
    return (
        players.map((player) => (
            <PlayerCard
                key = {player.id}
                player = {player}
            />
        ))
    )}

