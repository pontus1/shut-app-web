import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/sessionActions'
import { button } from 'bootstrap'

class Home extends React.Component {

  render () {
    return (
      <div>
        <h1>This is Home</h1>
        <p>YOu should be logged in, otherwise something is serously wrong!</p>
        <button
        onClick={this.props.logout}
        >LOGOUT</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(Home)
