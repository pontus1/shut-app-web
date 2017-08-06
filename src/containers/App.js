import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import { requireAuthentication } from './auth/Authentication'

import Login from './Login.js'
import Register from '../components/Register.jsx'
import Counter from './Counter'
import Home from './Home'
import NotFound from '../components/NotFound'

import '../styles/App.css'

const App = () => (
  <div>
    <nav>
      <NavLink activeClassName='active' to='/'>Counter</NavLink>
      <NavLink activeClassName='active' to='/'>Home</NavLink>
      <NavLink activeClassName='active' to='/login'>Login</NavLink>
      <NavLink activeClassName='active' to='/register'>Sign up</NavLink>
    </nav>

    <main>
      <Switch>
        <Route exact path='/' component={requireAuthentication(Home)} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/counter' component={Counter} />
        <Route path='/about-us' component={requireAuthentication(Home)} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

export default App
