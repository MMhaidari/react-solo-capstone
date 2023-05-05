/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

function List({ data }) {
  const classes = [];
  const [filteredCountry, setFilteredCountry] = useState('');
  const showCountryHundler = (event) => {
    setFilteredCountry(event.target.value);
  };

  const toDisplay = data.filter((country) => country.name.common.toLowerCase().includes(
    filteredCountry.toLowerCase(),
  )).map((item) => (
    <Link
      style={{ textDecoration: 'none' }}
      key={item.ccn3}
      to={`details/:${item.name.common}`}
      state={{ capital: item.capital[0] }}
    >
      <Card name={item.name.common} population={item.population} flag={item.flags.png} color={[]} />
    </Link>
  ));

  for (let c = 0; c < data.length; c += 1) {
    if (classes.length <= data.length) {
      if (c === 0) {
        classes.push('light');
      } else if (c % 2 === 0) {
        classes.push('light');
        classes.push('light');
      } else if (c % 2 !== 0) {
        classes.push('dark');
        classes.push('dark');
      }
    }
  }

  toDisplay.forEach((card, index) => {
    card.props.children.props.color.push(classes[index]);
  });

  const numberOfRows = Math.round(data.length / 2);
  let rows = '';
  for (let j = 0; j < numberOfRows; j += 1) {
    rows += ' 18rem';
  }
  return (
    <>
      <div className="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input className="filter-input" type="text" value={filteredCountry} onChange={showCountryHundler} placeholder="SEARCH" />
      </div>
      <div
        className="homeList"
        style={{
          gridTemplateRows: rows,
        }}
      >
        {toDisplay}
      </div>
    </>
  );
}

export default List;
