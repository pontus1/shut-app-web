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
      <div className='container' style={{border: '1px solid grey', borderRadius: '10px', maxWidth: '500px'}}>
        <div>
          <form onSubmit={this.onSubmit}>
            <div class='form-group'>
              <label>Email</label>
              <input className='form-control'
                type='text'
                name='email'
                placeholder='EMAIL'
                onChange={e => this.setState({email: e.target.value})} />
            </div>
            <div class='form-group'>
              <label>Password</label>
              <input className='form-control'
                type='password'
                name='password'
                placeholder='PASSWORD'
                onChange={e => this.setState({password: e.target.value})} />
            </div>
            <div class='form-group' style={{ textAlign: 'center' }}>
              <button className='btn btn-primary'
                style={{ margin: '15px' }}
                type='submit'>
                LOGIN
              </button>
            </div>

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
