import socketClient from 'socket.io-client'

export function setupRealtime(store, chatRoomActions) {
  const serverURL = 'http://localhost:3001' // TODO: Use ENV
  const io = socketClient(serverURL)

  io.on('message-change', (change) => {

    store.getState()
    if (!change.old_val) {
      store.dispatch(chatRoomActions.addMessageSuccess(change.new_val)) // addMsgSuccess
    } else if (!change.new_val) {
      store.dispatch(chatRoomActions.deleteMsgSuccess(change.old_val))  // TODO: Implement BE/FE
    } else {
      store.dispatch(chatRoomActions.editMsgSuccess(change.new_val))  // TODO: Implement BE/FE
    }
  })

}
