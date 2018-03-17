import React from 'react';
import './DeviceFilter.scss';

const DeviceFilter = ({
  onFilter
}) => {
  return (
    <input placeholder="Filter Devices" type="text" onChange={onFilter}/>
  )
}

export default DeviceFilter;