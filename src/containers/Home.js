import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/sessionActions'

class Home extends React.Component {

  render () {

    let { username } = this.props

    return (
      <div>
        <h1>This is Home</h1>
        <h3>Welcome {username}!</h3>
        <p>YOu should be logged in, otherwise something is serously wrong!</p>
        <button
        onClick={this.props.logout}
        >LOGOUT</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.session.user.name || 'unknown'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
