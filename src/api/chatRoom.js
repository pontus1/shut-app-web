/* global fetch, Headers */
import querystring from 'querystring'

const storage = window.localStorage
const serverURL = 'http://localhost:3001'   // TODO: utilize utils

const hardcodedConversationId = 'fa7d69d3-beed-496b-a6b2-4d11f174cd24'

class ChatRoomApi {
  /* GET ALL CHAT MESSAGES */
  // TODO: Implement in backend
  static getAllChatMessages (conversationId) {
    let headers = new Headers({
      'x-api-token': storage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    return fetch(`${serverURL}/chat/conversation/${conversationId}`, {
      method: 'GET',
      headers: headers
    })
    .then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  /* POST CHAT MESSAGE */
  static postChatMsg (text) {
    let headers = new Headers({
      'x-api-token': storage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    })

    let body = {
      text: text
    }

    return fetch(`${serverURL}/chat/conversation/${hardcodedConversationId}/message`, {
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
// END
}

export default ChatRoomApi
