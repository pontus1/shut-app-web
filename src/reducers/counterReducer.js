import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.counter, action) => {
  switch (action.type) {
    case types.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case types.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}
