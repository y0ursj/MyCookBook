import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Players from './Players'



class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.idPlayers)
    this.state = {
      players: {},
      idPlayers: props.idPlayer
    }
  }
 
  componentDidMount = async () => {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${this.state.idPlayers}`)
    const players = response.data.players[0];
    console.log(players)
    this.setState({
      players
    })
  }

  render() {
    console.log(this.state.players)
    return (
      <div id="profile-page">
        <div id="profilepic">
          <img src={this.state.players.strThumb}></img>
          </div>
        <div className="stats">
        <h1>{this.state.players.strPlayer}</h1>
        <p>{this.state.players.strPosition}</p>
        <p>{this.state.players.strTeam}</p>
        <p>{this.state.players.strHeight}</p>
        <p>{this.state.players.strWeight}</p>
          <p>{this.state.players.strDescriptionEN}</p>
          </div>
      
      </div>
    )
  }
}


export default Profile;