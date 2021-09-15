import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'
import TeamOneContainer from './components/TeamOneContainer'
import TeamTwoContainer from './components/TeamTwoContainer'
import TeamContainer from './components/TeamContainer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const myAPI = 'http://localhost:9292'

function App() {
  const [players, setPlayers] = useState([])

  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([])

  const [teams, setTeams] = useState([])

  function addToTeamOne(playerToAdd) {
    setTeamOne([...teamOne, playerToAdd])
    console.log(teamOne)
  }

  function addToTeamTwo(playerToAdd) {
    setTeamTwo([...teamTwo, playerToAdd])
    console.log(teamTwo)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  // function handleSubmit() {
  //   fetch(myAPI, {
  //     method: 'POST',
  //     headers: {
  //       Accept: '*/*',
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify([arr1, arr2]),
  //   })
  //     .then((res) => res.json())
  //     .then(([arr1, arr2]) => setTeams([...teams, [arr1, arr2]]))
  // }

  useEffect(
    () =>
      fetch(`${myAPI}/players`)
        .then((res) => res.json())
        .then((data) => setPlayers(data)),
    [],
  )

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <Link to="/"> Fantasy </Link>|<Link to="/teams"> Teams </Link>|
          <Link to="/players"> Players </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <h1> The Flatiron Grid-Iron</h1>
            </Route>
            <Route path="/teams">
              <TeamContainer
                teamOne={teamOne}
                teamTwo={teamTwo}
                handleSubmit={handleSubmit}
              />
            </Route>
            <Route path="/players">
              <h2>Draftable Players:</h2>
              <div className="player-container">
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
