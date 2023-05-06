import React from 'react';
import PropTypes from 'prop-types';

function DetailsCard({ title = 'none', value = 0, light }) {
  return (
    <div className={`detailsCard ${light ? 'light' : 'dark'}`}>
      <div className="detailsCardLeft">
        <p className="detailsCardTitle">{title}</p>
      </div>
      <div className="detailsCardRight">
        <p className="detailsCardNumber">{`${value}`}</p>
        <i className="fa-regular fa-circle-right detailsCardIcon" />
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  light: PropTypes.bool,
};

DetailsCard.defaultProps = {
  title: 'none',
  value: 0,
  light: false,
};

export default DetailsCard;
