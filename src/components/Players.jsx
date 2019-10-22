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
      <div>
        {
          this.state.players.map(players => (
            <Link to={`/profile/${players.idPlayer}`} > 
              <button>{players.strPlayer}</button>
              <img src={players.strCutout} />
            </Link>
  
          ))
        }
      </div >
    )
  }
}


export default Players;