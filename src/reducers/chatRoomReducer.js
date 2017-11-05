import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.chatRoom, action) => {
  switch (action.type) {
    /* LOAD MESSAGES */
    case types.REQUEST_LOAD_CHAT_MESSAGES:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.LOAD_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: [...state.messages.concat(action.messages)],
        isFetching: false,
        error: null
      }
    /* POST CHAT MESSAGE */
    case types.REQUEST_ADD_CHAT_MESSAGE:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.ADD_CHAT_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.message],
        isFetching: false,
        error: null
      }
    /* ERRORS */
    case types.LOAD_CHAT_MESSAGES_ERROR:
    case types.ADD_CHAT_MESSAGE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
