import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { Section } from '../../Components/Utils/Utils'

class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    alert('Successfully logged in')
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/blogFeed'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}

export default Login