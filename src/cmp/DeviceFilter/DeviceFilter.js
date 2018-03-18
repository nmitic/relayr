import React from 'react';
import PropTypes from 'prop-types';
import './DeviceFilter.scss';

const DeviceFilter = ({
  onFilter
}) => {
  return (
    <input placeholder="Type Here To Filter Devices" type="text" onChange={onFilter}/>
  )
}

DeviceFilter.propTypes = {
  onFilter: PropTypes.func.isRequired
}

export default DeviceFilter;