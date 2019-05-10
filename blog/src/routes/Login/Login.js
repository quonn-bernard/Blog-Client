import React, { Component, useContext } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { Section } from '../../Components/Utils/Utils'
import FeedContext from "../../contexts/FeedContext";

class Login extends Component {

  static contextType = FeedContext

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  // Fires success messages and re-routes user to blogfeed
  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/blogFeed'
    history.push(destination)
  }

  // renders LoginPage component
  render() {

    // returns LoginPage html(JSX)
    return (
      <Section className='LoginPage'>
      
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}

export default Login