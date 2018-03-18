import React from 'react';
import PropTypes from 'prop-types';
import './DeviceList.scss';

import DeviceItem from '../DeviceItem/DeviceItem';

const DeviceList = ({
  devices,
  onUpdateDevice
}) => {
  return (
    <div className="device-list">
    {
      devices.map(device => {
        return (
          <DeviceItem
            itemData={device}
            key={device.name}
            onUpdateDevice={onUpdateDevice}
          />
        )
      })
    }
    </div>
  )
}

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired,
  onUpdateDevice: PropTypes.func.isRequired
}

export default DeviceList;