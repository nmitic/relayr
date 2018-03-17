import React from 'react';
import './DeviceItem.scss';

import {convertTimeStamp} from '../../utils/convertTimeStamp';

import spiner from '../../assets/ajax-loader.gif';

const DeviceItem = ({
  errorShown,
  isFetching,
  deviceName,
  deviceValue,
  deviceUnit,
  deviceActive,
  deviceTimestamp,
  onUpdateDevice
}) => {
  
  const deviceStatus = deviceActive ? 'ON' : 'OFF';
  const buttonText = deviceActive ? 'TURN OFF' : 'TURN ON';
  const convertedTimestamp = convertTimeStamp(deviceTimestamp);
  const statusModifier = deviceActive ? '' : 'device-item__status--off';
  const btnModifier = isFetching ? 'device-item__btn--disable' : '';  

  return (
    <div className="device-item">
      <div className="device-item__inner">
        <div>Device: {deviceName}</div>
        <div>Value: {deviceValue} {deviceUnit}</div>
        <div>Status: <span className={`device-item__status ${statusModifier}`}>{deviceStatus}</span></div>      
        <div>Timestamp: {convertedTimestamp}</div>      
        <button className={`device-item__btn ${btnModifier}`} onClick={onUpdateDevice} data-device={deviceName}>{buttonText}</button>
        {
          isFetching && <img className="device-item__spinner" src={spiner} />
        }
        {
          errorShown && <p className="device-item__error-msg">Something went wrong, try again!</p>
        }
      </div>
    </div>
  )
}

export default DeviceItem;