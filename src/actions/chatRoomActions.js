import * as types from './actionTypes'
import chatRoomApi from '../api/chatRoom'

/* ---------------------------- *\
    ACTION-CREATORS - CHAT ROOM
\* ---------------------------- */

/* LOAD MESSAGES */
export const requestLoadChatMessages = () => ({
  type: types.REQUEST_LOAD_CHAT_MESSAGES
})

export const loadChatMessagesSuccess = (messages) => ({
  type: types.LOAD_CHAT_MESSAGES_SUCCESS,
  messages
})

export const loadChatMessagesError = (error) => ({
  type: types.LOAD_CHAT_MESSAGES_ERROR,
  error
})

/* POST/ADD MESSAGE */
export const requestAddMessage = () => ({
  type: types.REQUEST_ADD_CHAT_MESSAGE
})

export const addMessageSuccess = (message) => ({
  type: types.ADD_CHAT_MESSAGE_SUCCESS,
  message
})

export const addMessageError = (error) => {
  return {
    type: types.ADD_CHAT_MESSAGE_ERROR,
    error
  }
}

/* ----------------------- *\
       ASYNC (THUNK)
\* ----------------------- */

/* LOAD MESSAGES */
export const getMessages = (conversationId) => dispatch => {
  dispatch(requestLoadChatMessages())
  return chatRoomApi.getAllChatMessages(conversationId)
    .then(resp => {
      if (resp !== undefined) {
        dispatch(loadChatMessagesSuccess(resp))
      } else {
        dispatch(loadChatMessagesError('Något gick fel när meddelanden skulle hämtas. ' + resp.error))
      }
    })
    .catch(error => {
      dispatch(loadChatMessagesError(error))
    })
}

/* POST MESSAGE */
export const postMsg = (text) => dispatch => {
  dispatch(requestAddMessage())
  return chatRoomApi.postChatMsg(text)
  .then(resp => {
    if (resp.text !== undefined) {
      // dispatch(addMessageSuccess(resp.text))
      // DO NOTHING IT'S ALL TAKEN CARE OF BY SOCKET.IO
    } else {
      dispatch(addMessageError('Det gick inte att Skicka meddelandet. ' + resp.error))
    }
  })
  .catch(error => {
    dispatch(addMessageError(error))
  })
}
