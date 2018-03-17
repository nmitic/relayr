import { POPULATE_DEVICES, UPDATE_DEVICE, UPDATE_FETCH, SHOW_ERROR, HIDE_ERROR } from '../actions/device-actions';

const deviceReducer = (state = [], {type, payload}) => {
  switch (type) {
    case POPULATE_DEVICES:

      return payload.devices;

    case UPDATE_DEVICE:

       return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.active = !device.active;

          return device;
        }

        return device;
      });

    case UPDATE_FETCH:
    
      return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.isFetching = !device.isFetching;

          return device;
        }

        return device;
      });
    case HIDE_ERROR:
    
      return payload.devices.map(device => {

        if (device.name === payload.name) {
          
          device.errorShown = false;

          return device;
        }

        return device;
      });

    case SHOW_ERROR:
    
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