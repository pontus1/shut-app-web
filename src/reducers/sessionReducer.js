import * as types from '../actions/actionTypes'
import initialState from './initialState'

const storage = window.localStorage

export default (state = initialState.session, action) => {
  switch (action.type) {
    /* LOGIN */
    case types.REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        error: null,
        token: !!storage.getItem('token')
      }
    case types.LOG_IN_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    /* LOGOUT */
    case types.REQUEST_LOGOUT:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.LOG_OUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: null,
        user: null
      }
    case types.LOG_OUT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    /* GET LOGGED IN USER */
    case types.REQUEST_LOGGED_IN_USER:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case types.GET_LOGGED_IN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: action.user
      }
    case types.GET_LOGGED_IN_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        user: null
      }
    default:
      return state
  }
}
