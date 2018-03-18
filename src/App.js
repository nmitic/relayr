import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchDevices, toggleDevice } from './actions/device-actions';
import { filterDevice } from './actions/user-actions';

import { createSelector } from 'reselect';

import DeviceFilter from './cmp/DeviceFilter/DeviceFilter';
import DeviceStatus from './cmp/DeviceStatus/DeviceStatus';
import DeviceList from './cmp/DeviceList/DeviceList';

class App extends Component {

  static propTypes = {
    initialDevices: PropTypes.array.isRequired,
    devices: PropTypes.array.isRequired,
    activeDevices: PropTypes.number.isRequired,
    inactiveDevices: PropTypes.number.isRequired
  }
  
  render() {
    const devices = this.props.devices;

    return (
      <div>
        <DeviceFilter onFilter={this.filterDevice} />

        <DeviceStatus 
          activeDevices={this.props.activeDevices} 
          inactiveDevices={this.props.inactiveDevices}
        />
        
        <DeviceList
          devices={this.props.devices}
          onUpdateDevice={this.updateDevice}
        />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.onFetchDevices();
  }

  filterDevice = (event) => {
    this.props.onFilterDevice(event.target.value);    
  }

  updateDevice = (event) => {
    const device = event.currentTarget.dataset.device;
    const devices = this.props.initialDevices;
    const status = (event.currentTarget.textContent == 'true');    

    this.props.ontoggleDevice(device, devices, status);
  }
}

const mapActionsToProps = {
  onFetchDevices: fetchDevices,
  ontoggleDevice: toggleDevice,
  onFilterDevice: filterDevice
}

const mapStateToProps = createSelector(
  state => state.devices,
  state => state.filter,

  (devices, filter) => ({
    // set initial devices prop so that "device status" cmp always refer to the non filtered array of devices
    initialDevices: devices,
    devices: devices
      // map over device data and add two more props used for conditional renderng later
      .map(device => {
        return Object.assign({
          isFetching: false,
          errorShown: false
        }, device);
      })
      // filter devices per user search filter input
      .filter(device => {
        return device.name.includes(filter.toLowerCase());
      }),
    // Count the number of active devices
    activeDevices: devices.filter(device => {
      return device.active;
    }).length,
    // Count the number of inactive devices
    inactiveDevices: devices.filter(device => {
      return !device.active;
    }).length,
  })
)

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
