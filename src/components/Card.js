/* eslint-disable react/prop-types */
import React from 'react';

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
        <p className="homeCardNumber">{`${population} person`}</p>
      </div>
    </div>
  );
}

export default Card;
