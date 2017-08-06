// THIS IS A CONTAINER!!!!
import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/sessionActions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this)  // TODO: REMOVE AND MAKE WORK WITH ARROW FUNCTION
  }

  // DISPATCH ON SUBMIT
  onSubmit (e) {
    e.preventDefault()
    let { email, password } = this.state
    this.props.login(email, password)
    this.setState({
      email: '',
      password: ''
    })
  }

  render () {
    let { isLoading, isLoginSuccess, loginError } = this.props

    return (
      <div className='col-md-12'>
        <h1>Login</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            <label>email</label>
            <input type='text'
              name='email'
              placeholder='Enter email'
              onChange={e => this.setState({email: e.target.value})}/>
            <label>Password</label>
            <input type='password'
              name='password'
              placeholder='Enter password'
              onChange={e => this.setState({password: e.target.value})}/>
            <button type='submit'>
              Submit
            </button>
            <br/> {isLoading && <div>Please wait...</div>}
            {isLoginSuccess && <div>Success.</div>}
            {loginError && <div>{loginError}</div>}
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.session.isFetching,
    isLoginSuccess: state.session.isAuthenticated,
    loginError: state.session.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
