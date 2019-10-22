import { Link } from 'react-router-dom'
import React from 'react'



function Teams(props) {
  console.log(props.listOfTeams)

  return (
    <div className="team-container">
      {
        props.listOfTeams.map(teams => (
          <div className="teams">
            <Link to={`/team/${teams.idTeam}`} key={teams.strTeam} >
            <img className="teamimg" src={teams.strTeamBadge} />
            <button>{teams.strTeam}</button>
            </Link>
          </div>
       
        ))
      }
    </div >
  )
}


export default Teams;






