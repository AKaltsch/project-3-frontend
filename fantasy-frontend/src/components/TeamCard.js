

export default function TeamCard({ player, undraftPlayer }) {
    return (
        <div className="team-card">
            <div key={player.id}>
                <h3> Name: {player.name} </h3>
                <img src={player.image_url} />
                <h4> Rating: {player.rating} </h4>
            </div>
            <button onclick={() => undraftPlayer(player)}>Remove</button>
        </div>
    )
}