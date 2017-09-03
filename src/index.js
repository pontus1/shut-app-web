// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

/* Realtime */
import { setupRealtime } from './Realtime'
import * as chatRoomActions from './actions/chatRoomActions' // If more actions needs to be realtime they have to be imported and send to realtime as args

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/configureStore'
import App from './containers/App'

import 'bootstrap/dist/css/bootstrap.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)

setupRealtime(store, chatRoomActions)
