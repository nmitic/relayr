export const POPULATE_DEVICES = 'device:populateDevices';
export const UPDATE_DEVICE = 'device:updateDevice';
export const UPDATE_FETCH = 'device:updateFetch';
export const SHOW_ERROR = 'device:showError';
export const HIDE_ERROR = 'device:hideError';

import {toggleDeviceAPI, getDeviceListAPI} from '../utils/endpoints';

export const populateDeviceList = (devices = []) => {
  return {
    type: POPULATE_DEVICES,
    payload: {
      devices
    }
  }
}

export const fetchDevices = () => {
  return dispatch => {
    fetch(getDeviceListAPI())
    .then( response => response.json() )
    .then( data => {
      dispatch(populateDeviceList(data.data));
    })
  }
}

export const showDeviceError = (device, devices) => {
  return {
    type: SHOW_ERROR,
    payload: {
      name: device,
      devices
    }
  }
}

export const hideDeviceError = (device, devices) => {
  return {
    type: HIDE_ERROR,
    payload: {
      name: device,
      devices
    }
  }
}

export const updateDeviceFetching = (device, devices) => {
  return {
    type: UPDATE_FETCH,
    payload: {
      name: device,
      devices
    }
  }
}

export const updateDeviceStatus = (device, devices) => {
  return {
    type: UPDATE_DEVICE,
    payload: {
      name: device,
      devices
    }
  }
}

export const toggleDevice = (device, devices, status) => {
  return dispatch => {
    dispatch(updateDeviceFetching(device, devices));
    dispatch(hideDeviceError(device, devices));
       
    
    fetch(
      toggleDeviceAPI(device, status),
      { 
        method: 'PATCH', 
        headers: new Headers({'Content-Type': 'application/json'}) 
      }
    )
    .then (response => {
      if(response.ok) {
        return response;
      }
      dispatch(showDeviceError(device, devices));
      dispatch(updateDeviceFetching(device, devices));  
      throw new Error('Network response was not ok.');
    })
    .then( response => {
      dispatch(updateDeviceFetching(device, devices));
      dispatch(updateDeviceStatus(device, devices));
    })
    .catch(error => {    
      console.log('There has been a problem with your fetch operation: ', error.message);
    })
  }
}