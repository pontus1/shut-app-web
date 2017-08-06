import * as types from './actionTypes'
import sessionApi from '../api/session'

import { push } from 'react-router-redux'

const storage = window.localStorage

/* ---------------------------- *\
    ACTION-CREATORS - SESSION
\* ---------------------------- */

/* LOG IN */
export const requestLogin = () => ({
  type: types.REQUEST_LOGIN
})

export const loginSuccess = (token) => {
  storage.setItem('token', token)
  return {
    type: types.LOG_IN_SUCCESS,
    token
  }
}

export const loginError = (error) => {
  storage.removeItem('token')
  return {
    type: types.LOG_IN_ERROR,
    error
  }
}

/* LOG OUT */
export const requestLogout = () => ({
  type: types.REQUEST_LOGOUT
})

export const logoutSuccess = () => {
  storage.removeItem('token')
  return {
    type: types.LOG_OUT_SUCCESS
  }
}

export const logoutError = (error) => ({
  type: types.LOG_OUT_ERROR,
  error
})

/* GET LOGGED IN USER */
export const requestLoggedInUser = () => ({
  type: types.REQUEST_LOGGED_IN_USER
})

export const getLoggedInUserSuccess = (user) => ({
  type: types.GET_LOGGED_IN_USER_SUCCESS,
  user
})

export const getLoggedInUserError = (error) => ({
  type: types.GET_LOGGED_IN_USER_ERROR,
  error
})

/* GET INITIAL DATA */
export const loadInitialData = () => (dispatch) => {
  // dispatch(loadUsers())
  // dispatch(loadTweets())
}

/* ----------------------- *\
       ASYNC (THUNK)
\* ----------------------- */

// export const getLoggedInUser = () => dispatch => {
//   dispatch(requestLoggedInUser())
//   return sessionApi.getLoggedInUser().then(response => {
//     if (response.email !== undefined) {
//       /* SUCCESS */
//       dispatch(getLoggedInUserSuccess(response))
//       dispatch(push('/'))
//       dispatch(loadInitialData(response.userId))
//     } else {
//       /* ERROR */
//       dispatch(getLoggedInUserError('Något gick fel när användardata skulle hämtas. ' + response.error))
//     }
//   }).catch(error => {
//     dispatch(getLoggedInUserError(error))
//   })
// }

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin())
  return sessionApi.login(email, password).then(response => {
    if (response.token !== undefined) {
      /* SUCCESS */
      dispatch(loginSuccess(response.token))
      // dispatch(getLoggedInUser())  // TODO: use!!!
      dispatch(push('/'))
    } else {
      /* ERROR */
      dispatch(loginError('Det gick inte att logga in. ' + response.error))
    }
  }).catch(error => {
    dispatch(loginError(error))
  })
}

export const logoutUser = () => dispatch => {
  console.log('logging out...')
  dispatch(requestLogout())
  return sessionApi.logout().then(response => {
    if (response.status === 200) {
      /* SUCCESS */
      dispatch(logoutSuccess())
      dispatch(push('/'))
    } else {
      /* ERROR */
      dispatch(logoutError('Något gick fel vid utloggningen. ' + response.error))
    }
  }).catch(error => {
    dispatch(logoutError(error))
  })
}
