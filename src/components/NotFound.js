import React from 'react'

export default class NotFound extends React.Component {
  render () {
    return (
      <div>
        <section>
          <h1>404</h1>
          <h2>This page does not exist.</h2>
          <p>to get to the start page, click the button below</p>
        </section>
        <div>
          <a href='/'>Home</a>
        </div>
      </div>
    )
  }
}
