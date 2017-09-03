import * as types from './actionTypes'
import chatRoomApi from '../api/chatRoom'

/* ---------------------------- *\
    ACTION-CREATORS - CHAT ROOM
\* ---------------------------- */

/* LOAD MESSAGES */
// TODO: Implement (see actionTypes!)


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

export const postMsg = (text) => dispatch => {
  dispatch(requestAddMessage())
  return chatRoomApi.postChatMsg(text).then(resp => {
    if (resp.text !== undefined) {
      // dispatch(addMessageSuccess(resp.text))
      // DO NOTHING IT'S ALL TAKEN CARE OF BY SOCKET.IO
    } else {
      dispatch(addMessageError('Det gick inte att Skicka meddelandet. ' + resp.error))
    }
  }).catch(error => {
    dispatch(addMessageError(error))
  })
}
