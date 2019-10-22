import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import axios from 'axios'
import Players from './components/Players'
import Profile from './components/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import Teams from './components/Teams'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: []
    }
  };

  componentDidMount = async () => {
    const response = await axios.get('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387')
    const teams = response.data.teams
    // console.log(teams)
    this.setState({
      teams
    })
  }
  render() {
    return (
      <div className="app" >
        <Header />
        <Route exact path="/" render={() => <Teams listOfTeams={this.state.teams} />} />
        <Route path="/team/:idTeam" render={(props) => <Players idTeam={props.match.params.idTeam} />} />
        <Route path="/profile/:idPlayer" render={(props) => <Profile idPlayer={props.match.params.idPlayer} />} />
        <Footer />
      </div>
    );
  }
}
export default App;