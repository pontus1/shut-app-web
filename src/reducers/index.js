/* ROOT REDUCER */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counterReducer'
import session from './sessionReducer.js'

export default combineReducers({
  routing: routerReducer,
  counter,
  session
})
