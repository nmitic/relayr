import React from 'react';
import PropTypes from 'prop-types';
import './DeviceStatus.scss';

const DeviceStatus = ({
  activeDevices,
  inactiveDevices
}) => {
  return (
    <div className="device-status">
      <div className="device-status__title">Device counter</div>
      <div className="device-status__active">active:{activeDevices}</div>
      <div className="device-status__inactive">inactive:{inactiveDevices}</div>
    </div>
  )
}

DeviceStatus.propTypes = {
  activeDevices: PropTypes.number.isRequired,
  inactiveDevices: PropTypes.number.isRequired
}

export default DeviceStatus;