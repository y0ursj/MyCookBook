import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'



class Players extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.idTeam)
    this.state = {
      players: [],
      idTeam: props.idTeam
    }
  }

  componentDidMount = async () => {
    const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=${this.state.idTeam}`)
    const players = response.data.player;
    console.log(players)
    this.setState({
      players
    })
  }

  render() {
    console.log(this.state.players)
    return (
      <div className="playersimg2">
        {
          this.state.players.map(players => (
            <div className="players"><Link to={`/profile/${players.idPlayer}`} >
              <div className="players-center">
                {
                  (players.strCutout ? <img src={players.strCutout} /> : <img src="https://www.stickpng.com/assets/images/58967e8c0803320bf17c2fb7.png" alt="michael jordan sweating from his eyes" />)
                }
                <button>{players.strPlayer}</button>
              </div>
            </Link></div>

          ))
        }
      </div >
    )
  }
}


export default Players;