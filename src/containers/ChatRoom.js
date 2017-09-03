// THIS IS A CONTAINER!!!!
import React from 'react'
import { connect } from 'react-redux'
import { postMsg } from '../actions/chatRoomActions'

class ChatRoom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageInput: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.postMsg(this.state.messageInput)
    this.setState({
      messageInput: ''
    })
  }

  render () {

    let { messages, isLoading, error } = this.props

    const listItems = this.props.messages.map((message, index) =>
      <li key={index}>
        { message.text } -- { message.author }
      </li>
    )

    return (
      <div>
        <h1>CHAT ROOM</h1>

          <br/>
          {isLoading && <div>Please wait...</div>}
          {error && <div>{error}</div>}

        <div className='container' style={{ position: 'fixed', bottom: '0', width: '100%' }}>
          <ul id='messages'>{ listItems }</ul>
          <form onSubmit={this.onSubmit}>
            <input id='m'
              value={this.state.messageInput}
              autoComplete='off'
              onChange={e => this.setState({ messageInput: e.target.value })} />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.chatRoom.messages,
    isLoading: state.chatRoom.isFetching,
    error: state.chatRoom.error
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    postMsg: (messageInput) => dispatch(postMsg(messageInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
