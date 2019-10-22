import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Header() {
  return (
    <div>
      <p>
        <h1> NBA INSIDER </h1>
        <Link to="/" id="header-link">Home</Link>
      </p>
    </div>
  )
}