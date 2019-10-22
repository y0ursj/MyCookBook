import { Link } from 'react-router-dom'
import React from 'react'



function Teams(props) {
  console.log(props.listOfTeams)

  return (
    <div>
      {
        props.listOfTeams.map(teams => (
          <Link to={`/team/${teams.idTeam}`} key={teams.strTeam} >
            <button>{teams.strTeam}</button>
            <img src={teams.strTeamBadge} />
          </Link>
       
        ))
      }
    </div >
  )
}


export default Teams;






