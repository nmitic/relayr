import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

import {Provider} from 'react-redux';
import store from './store';

function render(Component) {
    ReactDOM.render(
        <Provider store={store}>
          <AppContainer>
              <Component/>
          </AppContainer>
        </Provider>,
        document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}