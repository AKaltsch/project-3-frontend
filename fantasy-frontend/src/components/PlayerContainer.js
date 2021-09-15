import PlayerCard from './PlayerCard'

export default function PlayerContainer({ players, addToTeamOne, addToTeamTwo }){
   
    return (
        players.map((player) => (
            <PlayerCard
                key = {player.id}
                player = {player}
                addToTeamOne = {addToTeamOne}
                addToTeamTwo = {addToTeamTwo}
            />
        ))
    )}

