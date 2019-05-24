import React from 'react';
import { Button, Input, Required, Textarea } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import FeedContext from "../../contexts/FeedContext";
import Notification from "../Notifications/Notifications";

class RegistrationForm extends React.Component {
  
  static contextType = FeedContext

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
        email.value = ''
        user_name.value = ''
        password.value = ''
        if(this.state.error === null){
          this.props.onRegistrationSuccess()
        }
        this.timeout = setTimeout(() => {
          this.props.onRegistrationSuccess()
      }, 2000)

        
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    
    return (

      <React.Fragment>
        <Notification top={this.context.top} message={`created ${this.context.user}`} notification={this.context.notification}></Notification>
        <div>

          <section className="section section-grid">
            <div></div>
            <div className="section-grid-item">

              <form id="contact-form" onSubmit={this.handleSubmit}>
                <div role='alert'>
                  {error && <p className='red'>{error}</p>}
                </div>
                <div className='user_name'>
                  
                  <Input
                    name='user_name'
                    type='text'
                    required
                    id='RegistrationForm__user_name'
                    placeholder="Username(Required)"
                    className="text">
                  </Input>
                </div>

                <div className='email'>
                  <Input
                    name='email'
                    type='email'
                    required
                    id='RegistrationForm__email'
                    placeHolder="Email(Required)"
                    className="text">
                  </Input>
                </div>

                <div className='password'>
                  <Input
                    name='password'
                    type='password'
                    required
                    id='RegistrationForm__password'
                    placeHolder="Password(Required)"
                    className="text">
                  </Input>
                </div>

                <Button className="btn submit_btn" type='submit'>
                  Register
              </Button>
              </form>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default RegistrationForm;
