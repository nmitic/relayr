import thunk from 'redux-thunk';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';

import deviceReducer from './reducers/device-reducer';
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
  devices: deviceReducer,
  filter: userReducer
})

const defaultState = {
  devices: [],
  filter: ''
}

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
  allReducers,
  defaultState,
  allStoreEnhancers
);

export default store;