import React from 'react';
import PropTypes from 'prop-types';

const SpellListItem = ({ name }) => (
  <h6>{name}</h6>
);

SpellListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SpellListItem;
