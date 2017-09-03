/* ROOT REDUCER */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counterReducer'
import session from './sessionReducer'
import chatRoom from './chatRoomReducer'

export default combineReducers({
  routing: routerReducer,
  counter,
  session,
  chatRoom
})
