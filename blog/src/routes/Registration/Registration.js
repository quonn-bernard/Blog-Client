import React, {useContext} from 'react';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import { Section } from '../../Components/Utils/Utils';
import FeedContext from "../../contexts/FeedContext";

class Registration extends React.Component {

  static contextType = FeedContext

  state = {
    top: -100,
    message: 'New User Created',
    updateMessage: () => {}
  }
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  handleRegistrationSuccess = subscriber => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <h2>Sign Up Here, So You Never Miss A Post!</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
      </Section>
    )
  }
}

export default Registration;