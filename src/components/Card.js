import React from 'react';
import PropTypes from 'prop-types';

function Card({
  color, name, population, flag,
}) {
  return (
    <div className={`homeCard ${color[0]}`}>
      <div className="homeCardTop">
        <i className="fa-regular fa-circle-right cardIcon" />
        <img className="homeCardTopImg" src={flag} alt={name} />
      </div>
      <div className="homeCardBottom">
        <p className="homeCardTitle">{name}</p>
        <p className="homeCardNumber">
          {Math.round(population / 1000000)}
          M
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Card;
