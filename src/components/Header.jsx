import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Header() {
  return (
    <div className="header">
          <Link to="/" id="header-link"> <img src='https://www.stickcal.com/image/cache/catalog/products/stickers/nba-logo-rectangle-600x600.jpg'></img></Link>
      <h1> NBA INSIDER </h1>
    </div>
  )
}