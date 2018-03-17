const toggleDeviceAPI = (deviceName, deviceStatus) => `http://127.0.0.1:8888/device/${deviceName}?active=${deviceStatus}`;
const getDeviceListAPI = () => 'http://127.0.0.1:8888/device';

export {toggleDeviceAPI, getDeviceListAPI};