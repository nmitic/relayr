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
    .then( response => {
      if (response.ok) {        
        return response;
        
      }
      else throw new Error('Network response was not ok.');
    })
    .then( response => response.json() )
    .then( data => {
      dispatch(populateDeviceList(data.data));
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ', error.message);      
    })
  }
}
// Returning a fun with a type of action that needs to be dispatched
export const updateDevice = (type) => {
  return (device, devices) => {
    return {
      type: type,
      payload: {
        name: device,
        devices
      }
    }
  }
}

export const toggleDevice = (device, devices, status) => {
  return dispatch => {
    // toogle Fetching for currently selected device - show loading spinner
    dispatch(updateDevice(UPDATE_FETCH)(device, devices))
    // Hide error if it was shown from previously faild PATCH request
    dispatch(updateDevice(HIDE_ERROR)(device, devices))
       
    
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
      // If PATCH fails show error msg
      dispatch(updateDevice(SHOW_ERROR)(device, devices)) 
      // toogle Fetching for currently selected device - hide loading spinner
      dispatch(updateDevice(UPDATE_FETCH)(device, devices))        
      throw new Error('Network response was not ok.');
    })
    .then( response => {
      // toogle Fetching for currently selected device - hide loading spinner
      dispatch(updateDevice(UPDATE_FETCH)(device, devices))
      // toogle device status for currently selected device - set active to true/false
      dispatch(updateDevice(UPDATE_DEVICE)(device, devices))      
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ', error.message);
    })
  }
}