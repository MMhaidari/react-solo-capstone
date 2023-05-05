/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ country }) {
  return (
    <div className="navbar">
      {country && (
        <div className="navbar-right">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-solid fa-chevron-left" />
            {' '}
            Back
          </Link>
        </div>
      )}
      <div className="navbar-middle">
        {country ? `Countries/${country}` : 'Independent Countries'}
      </div>
      <div className="navbar-left">
        <i className="fa-solid fa-microphone" />
        <i className="fa-solid fa-gear" />
      </div>
    </div>
  );
}

export default Navbar;
