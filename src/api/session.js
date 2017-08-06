/* global fetch, Headers */
import querystring from 'querystring'

const storage = window.localStorage
const serverURL = 'http://localhost:3001'   // TODO: utilize utils
// const usersURL = `${serverURL}/api/users`

class SessionApi {

  /* LOGIN */
  static login (email, password) {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    let body = {
      email: email,
      password: password
    }

    return fetch(`${serverURL}/login`, {
      method: 'POST',
      headers: headers,
      body: querystring.stringify(body)
    })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  /* LOGOUT */
  static logout () {
    let headers = new Headers({
      'x-api-token': storage.getItem('token')
    })
    return fetch(`${serverURL}/users`, {
      method: 'GET',
      headers: headers
    })
    .then(response => {
      return response
    }).catch(error => {
      return error
    })
  }

  /* GET LOGGED IN USER */
  // static getLoggedInUser () {
  //   let headers = new Headers({
  //     'Authorization': 'Bearer ' + storage.getItem('token')
  //   })
  //   return fetch(`${usersURL}/loggedInUser`, {
  //     method: 'GET',
  //     headers: headers
  //   })
  //   .then(response => {
  //     return response.json()
  //   }).catch(error => {
  //     return error
  //   })
  // }
}

export default SessionApi
