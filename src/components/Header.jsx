import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Header() {
  return (
    <div className="header">
      <h1> NBA INSIDER </h1>
      <Link to="/" id="header-link">Home</Link>
      
    </div>
  )
}