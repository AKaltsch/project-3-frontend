import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'
import TeamContainer from './components/TeamContainer'
import CreateAPlayer from './components/CreateAPlayer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const myAPI = 'http://localhost:9292'

function App() {
  const [players, setPlayers] = useState([])

  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([])

  const [teamToSubmit, setTeamToSubmit] = useState([])

  function addToTeamOne(playerToAdd) {
    fetch(`${myAPI}/players/${playerToAdd.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        team_id: 51,
      }),
    })
      .then((res) => res.json())
      .then(() => setTeamOne([...teamOne, playerToAdd]))
  }


  function addToTeamTwo(playerToAdd) {
    fetch(`${myAPI}/players/${playerToAdd.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        team_id: 52,
      }),
    })
      .then((res) => res.json())
      .then(() => setTeamTwo([...teamTwo, playerToAdd]))
  }


//This is nonsense
//Tessting
//another 
//one more
 
  function handleDelete(playerToDelete){
    fetch(`${myAPI}/players/${playerToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then (setPlayers(players.filter(player => player.id !== playerToDelete.id)))
  }


  function handleSubmit(player) {
    fetch(`${myAPI}/players`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(player),
    })
      .then((res) => res.json())
      .then((player) => setPlayers([player, ...players]))
  }

  useEffect(
    () =>
      fetch(`${myAPI}/players`)
        .then((res) => res.json())
        .then((data) => setPlayers(data))
    ,[],
  )

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Link to="/"> Create-A-Player </Link>|<Link to="/teams"> Teams </Link>|
          <Link to="/players"> Players </Link>
        </header>
        <h1> The Flatiron Grid-Iron</h1>
        <main>
          <Switch>
            <Route exact path="/">
              
            </Route>
            <Route path="/teams">
              <TeamContainer
                teamOne={teamOne}
                teamTwo={teamTwo}
              />
            </Route>
            <Route path="/players">
              <h2>Draftable Players:</h2>
              <div className="player-container">
                <CreateAPlayer handleSubmit={handleSubmit}/>  
                <PlayerContainer
                  players={players}
                  addToTeamOne={addToTeamOne}
                  addToTeamTwo={addToTeamTwo}
                  handleDelete={handleDelete}
                />
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
