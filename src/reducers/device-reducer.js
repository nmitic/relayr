import { POPULATE_DEVICES, UPDATE_DEVICE, UPDATE_FETCH, SHOW_ERROR, HIDE_ERROR } from '../actions/device-actions';

const deviceReducer = (state = [], {type, payload}) => {
  switch (type) {
    case POPULATE_DEVICES:

      return payload.devices;

    case UPDATE_DEVICE:
       // Map over devices and toogle their active status
    
       return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.active = !device.active;

          return device;
        }

        return device;
      });

    case UPDATE_FETCH:
       // Map over devices and toogle their isFetch flag
      return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.isFetching = !device.isFetching;

          return device;
        }

        return device;
      });
    case HIDE_ERROR:
      // Map over devices and set errorShown flag to false so the the error msg can be hidden 
      return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.errorShown = false;

          return device;
        }

        return device;
      });

    case SHOW_ERROR:
      // Map over devices and set errorShown flag to true so the the error msg can be shown
      return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.errorShown = true;

          return device;
        }

        return device;
      });
    
    default:
      return state;    
  }
}

export default deviceReducer;