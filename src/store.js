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
  window.navigator.userAgent.includes('Chrome') ?
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
)

const store = createStore(
  allReducers,
  defaultState,
  allStoreEnhancers
);

export default store;