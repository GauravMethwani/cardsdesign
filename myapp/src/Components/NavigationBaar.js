import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBaar.css'; // Import your CSS file


export default function NavigationBaar() {
  return (
    <div>
      <div className='navigation'>
        <div>BrainyLingo</div>
        <div>
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/pages" activeClassName="active">Leaderboard</NavLink></li>
            <li><NavLink to="/dailyout" activeClassName="active">DaliyOut</NavLink></li>
            <li><NavLink to="/Cards2" activeClassName="active">Page2</NavLink></li>
          </ul>
        </div>
        <div><NavLink to="/signout" activeClassName="active">Signout</NavLink></div>
      </div>
    </div>
  );
}
