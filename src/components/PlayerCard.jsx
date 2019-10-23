import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function PlayerCard(props) {
  return (
    <div id="stats2">
      <h2>{props.strPlayer}</h2>
      <p>Position: {props.strPosition}</p>
      <p>Plays for the {props.strTeam}</p>
      <p>Height: {props.strHeight}</p>
      <p>Weight: {props.strWeight}</p>
    </div>
  )
}
