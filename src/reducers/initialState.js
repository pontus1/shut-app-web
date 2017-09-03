import jwt from 'jwt-simple'

const secret = 'MTIzNDU2'  // TODO: USE .ENV

const storage = window.localStorage
const token = storage.getItem('token')
let user = {}

// TODO: Use try catch to prevent: Error: Signature verification failed
if (token) {
  const decodedjwt = jwt.decode(token, secret)
  user.id = decodedjwt.sub
  user.email = decodedjwt.iss
  user.name = decodedjwt.name
}


const initialState = {
  counter: {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
  },
  session: {
    token: null,
    isAuthenticated: !!storage.getItem('token'),
    isFetching: false,
    error: null,
    user: user || null
  },
  chatRoom: {
    messages: [],
    isFetching: false,
    error: null
  }
}

export default initialState
