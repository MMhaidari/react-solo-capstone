import React from 'react';
import PropTypes from 'prop-types';
import map from '../img/map.png';

function Header({ population, title = 'Independent Countries', flag }) {
  return (
    <div className="header">
      <div className="headerLeft">
        <img className="headerImg" src={flag || map} alt={title} />
      </div>
      <div className="headerRight">
        <p style={title !== 'Independent Countries' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }} className="headerRightTitle">
          {title}
        </p>
        <p style={title !== 'Independent Countries' ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' }} className="headerRightSubTitle">{`Population: ${(population / 1000000000).toFixed(1)} Billion  People`}</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  population: PropTypes.number.isRequired,
  title: PropTypes.string,
  flag: PropTypes.string,
};

Header.defaultProps = {
  title: 'Independent Countries',
  flag: null,
};

export default Header;
