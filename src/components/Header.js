/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import map from '../img/map.png';

function Header({ population, title = 'Independent Countries', flag }) {
  return (
    <div className="header">
      <div className="headerLeft">
        <img className="headerImg" src={flag ? flag : map} alt={title} />
      </div>
      <div className="headerRight">
        <p style={title !== 'Independent Countries' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }} className="headerRightTitle">
          {
          title
          }
        </p>
        <p style={title !== 'Independent Countries' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }} className="headerRightSubTitle">{`Population: ${(population / 1000000000).toFixed(1)} Billion  People`}</p>
      </div>
    </div>
  );
}

export default Header;
