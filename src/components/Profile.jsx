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
          {this.state.players.strThumb ? <img src={this.state.players.strThumb} /> : <img src="https://www.stickpng.com/assets/images/58967e8c0803320bf17c2fb7.png" alt="michael jordan sweating from his eyes" />}
        </div>
        <div className="stats">
          <div id="stats2">
          <h2>{this.state.players.strPlayer}</h2>
          <p>Position: {this.state.players.strPosition}</p>
          <p>Plays for the {this.state.players.strTeam}</p>
          <p>Height: {this.state.players.strHeight}</p>
            <p>Weight: {this.state.players.strWeight}</p>
            </div>
          <p id ="playerdes">{this.state.players.strDescriptionEN}</p>
        </div>

      </div>
    )
  }
}


export default Profile;