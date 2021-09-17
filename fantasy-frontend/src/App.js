import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'
import TeamContainer from './components/TeamContainer'
import CreateAPlayer from './components/CreateAPlayer'
import About from './components/About'
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
        team_id: 5,
      }),
    })
      .then((res) => res.json())
      .then(() => setTeamOne([...teamOne, playerToAdd]))
  }

  const team1 = players.filter(player => player.team_id === 51)


  function addToTeamTwo(playerToAdd) {
    fetch(`${myAPI}/players/${playerToAdd.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        team_id: 6,
      }),
    })
      .then((res) => res.json())
      .then(() => setTeamTwo([...teamTwo, playerToAdd]))
  }

  const team2 = players.filter(player => player.team_id === 52)

  function undraftTeamOnePlayer(playerToRemove) {
    //console.log(playerToRemove)
    fetch(`${myAPI}/players/${playerToRemove.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        team_id: null,
      }),
    })
      .then((res) => res.json())
      .then(() => setTeamOne(teamOne.filter(player => player.id !== playerToRemove.id)))
  }

  function undraftTeamTwoPlayer(playerToRemove) {
    fetch(`${myAPI}/players/${playerToRemove.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        team_id: null,
      }),
    })
      .then((res) => res.json())
      //.then((player) => console.log(player))
      .then(() => setTeamTwo(teamTwo.filter(player => player.id !== playerToRemove.id)))
  }
 
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

  useEffect(
    () =>
      fetch(`${myAPI}/team/scores/5`)
        .then((res) => res.json())
        .then((data) => console.log(data))
      , [],
  )

  return (
    <Router>
       <h1> The Flatiron Grid-Iron</h1>
      <div className="App">
        <header className="app-header">
          <Link to="/"> About </Link>|<Link to="/teams"> Teams </Link>|
          <Link to="/players"> Players </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
                <About />
            </Route>
            <Route path="/teams">
              <TeamContainer
                players = {players}
                teamOne={teamOne}
                teamTwo={teamTwo}
                undraftTeamTwoPlayer = {undraftTeamTwoPlayer}
                undraftTeamOnePlayer = {undraftTeamOnePlayer}
              />
            </Route>
            <Route path="/players">
              <div className="player-container">
                <CreateAPlayer handleSubmit={handleSubmit}/>  
                <h2>Draftable Players:</h2>
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
