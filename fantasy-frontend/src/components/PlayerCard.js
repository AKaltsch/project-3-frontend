export default function PlayerCard({ player }){
    return (
        <div className='player-card'>
            <div key={player.id}>
            <h4> Name: {player.name} </h4>
                <img src={player.image_url}/>
                <h5> Rating: {player.rating} </h5>
            </div>

        </div>
    )
}