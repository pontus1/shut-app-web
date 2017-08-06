import React from 'react'

// TODO: use this as the dumb component for src/constainers/Login

const LoginForm = ({}) => {
  return (
    <div className='col-md-12'>
      <h1>Login</h1>
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input type='text'
            name='username'
            placeholder='Enter username'
            onChange={e => this.setState({username: e.target.value})}/>
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

export default LoginForm
