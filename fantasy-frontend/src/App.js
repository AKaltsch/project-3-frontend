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
    setTeamOne([...teamOne, playerToAdd])
  }

  function addToTeamTwo(playerToAdd) {
    setTeamTwo([...teamTwo, playerToAdd])
  }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   console.log(e)


  function handleSubmit(player) {
    fetch(myAPI, {
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
