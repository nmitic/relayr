import React from 'react';
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
            isFetching={device.isFetching}
            errorShown={device.errorShown}
            key={device.name}
            deviceName={device.name}
            deviceValue={device.value}
            deviceUnit={device.unit}
            deviceActive={device.active}
            deviceTimestamp={device.timestamp}
            onUpdateDevice={onUpdateDevice}
          />
        )
      })
    }
    </div>
  )
}

export default DeviceList;