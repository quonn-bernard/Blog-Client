import React from 'react';
import { Button, Input, Required, Textarea } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import ee from '../../events'; 

class RegistrationForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { email, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email: email.value,
    })
      .then(user => {
        // notify(`User Account for ${user_name} has been created`)
        email.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    const { error } = this.state
    return (
      <div>
        {/* <Notifications></Notifications> */}
        <section className="section section-grid">
          <div></div>
          <div className="section-grid-item">
            <form id="contact-form" onSubmit={this.handleSubmit}>
              <div role='alert'>
                {error && <p className='red'>{error}</p>}
              </div>


              <div className='user_name'>
                <label htmlFor='RegistrationForm__user_name'>
                  User name <Required />
                </label>
                <Input
                  name='user_name'
                  type='text'
                  required
                  id='RegistrationForm__user_name'>
                </Input>
              </div>

              <div className='email'>
                <label htmlFor='RegistrationForm__email'>
                  Email <Required />
                </label>
                <Input
                  name='email'
                  type='email'
                  required
                  id='RegistrationForm__email'>
                </Input>
              </div>

              <div className='password'>
                <label htmlFor='RegistrationForm__password'>
                  Password <Required />
                </label>
                <Input
                  name='password'
                  type='password'
                  required
                  id='RegistrationForm__password'>
                </Input>
              </div>

              <Button class="btn" type='submit'>
                Register
              </Button>
              
            </form>
          </div>
          <div />
        </section></div>
    );
  }

}

export default RegistrationForm;
