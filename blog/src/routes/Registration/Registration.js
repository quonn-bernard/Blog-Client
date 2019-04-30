import React from 'react';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import { Section } from '../../Components/Utils/Utils';
import Notifications, {notify} from "../../Components/Notifications/Notifications";

class Registration extends React.Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = user => {
    
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <Notifications></Notifications>
        <h2>Sign Up Here, So You Never Miss A Post!</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        {/* <button onClick={notify('new user account')} class="btn">Click</button> */}
      </Section>
    )
  }
}

export default Registration;