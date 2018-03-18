import React from 'react';
import PropTypes from 'prop-types';
import './DeviceItem.scss';

import {convertTimeStamp} from '../../utils/convertTimeStamp';

import spiner from '../../assets/ajax-loader.gif';

const DeviceItem = ({
  itemData,
  onUpdateDevice
}) => {
  
  const deviceStatus = itemData.active ? 'ON' : 'OFF';
  const buttonText = itemData.active ? 'TURN OFF' : 'TURN ON';
  const convertedTimestamp = convertTimeStamp(itemData.timestamp);
  const statusModifier = itemData.active ? '' : 'device-item__status--off';
  const btnModifier = itemData.isFetching ? 'device-item__btn--disable' : '';  
  
  return (
    <div className="device-item">
      <div className="device-item__inner">
        <div>Device: {itemData.name}</div>
        <div>Value: {itemData.value} {itemData.unit}</div>
        <div>Status: <span className={`device-item__status ${statusModifier}`}>{deviceStatus}</span></div>      
        <div>Timestamp: {convertedTimestamp}</div>      
        <button className={`device-item__btn ${btnModifier}`} onClick={onUpdateDevice} data-device={itemData.name}>{buttonText}</button>
        {
          itemData.isFetching && <img className="device-item__spinner" src={spiner} />
        }
        {
          itemData.errorShown && <p className="device-item__error-msg">Something went wrong, try again!</p>
        }
      </div>
    </div>
  )
}

DeviceItem.propTypes = {
  itemData: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    errorShown: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }),
  onUpdateDevice: PropTypes.func.isRequired
}

export default DeviceItem;