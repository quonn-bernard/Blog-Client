import React, {useContext} from 'react';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import { Section } from '../../Components/Utils/Utils';
import NotificationProvider from "../../NotificationContext/NotificationContext";
import Notification from "../../Components/Notifications/Notifications";

class Registration extends React.Component {
  state = {
    top: 100,
    message: 'New User Created',
    updateMessage: () => {}
  }
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  //message = 'Subscriber Created';

  handleRegistrationSuccess = subscriber => {
    alert('new user created')
    // const { history } = this.props
    // history.push('/login')
  }

  updateMessage = () => {
    console.log('xxx')

  };

  render() {
    
    const context = { top: this.state.top, message: this.state.massage, updateMessage: this.state.updateMessage }
    
    return (
      <Section className='RegistrationPage'>
        <h2>Sign Up Here, So You Never Miss A Post!</h2>
        {/* <button onClick={() => this.fireAlert('Account Created')}>Registration Click</button> */}
        <NotificationProvider value={context}>
          <Notification update={this.updateMessage} />
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </NotificationProvider>
      </Section>
    )
  }
}

export default Registration;