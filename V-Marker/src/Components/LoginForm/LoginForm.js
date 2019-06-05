import React, { Component } from 'react';
import { Button, Input } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'
import FeedContext from "../../contexts/FeedContext";
import Notification from "../Notifications/Notifications";
import "./LoginForm.css";

export default class LoginForm extends Component {

    static contextType = FeedContext

    // invoked by handleSubmitBasicAuth
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    //   manages form state
    state = { error: null }

    // invoked after form inputs are validated
    handleSubmitJwtAuth = ev => {

        ev.preventDefault();

        // updates state.error
        this.setState({ error: null });

        //deconstruct form values into variables
        const { user_name, password } = ev.target;

        this.context.setUser(user_name.value);

        window.sessionStorage.setItem("user", this.context.user);

        // A fetch call is made to the server from this method @ line 4/AuthApiService.js to /auth/login endpoint in the server
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })

            // form values are cleared, token is saved and success method is invoked @ line 13/Login.js
            .then(res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.timeout = setTimeout(() => {
                    this.props.onLoginSuccess();
                }, 2000);

            })

            // updates form state.error if login fails
            .catch(res => {
                this.setState({ error: res.error });
            });
    }

    // render LoginForm component
    render() {

        // destructure the state into "error" variable
        const { error } = this.state

        // return LoginForm (JSX)html
        return (
            <React.Fragment>
                <section className="section section-grid">
                    {/* spacer */}
                    <div className="section-grid-item"></div>
                    <div className="section-grid-item">
                        <h2>Login</h2>
                        <Notification top={this.context.top} message={`Logged in as ${this.context.user}`} notification={this.context.notification}></Notification>
                        <p>Username:"demo1234"</p>
                        <p>Pass:"Demo1234!"</p>
                        <form id="contact-form"
                            onSubmit={this.handleSubmitJwtAuth}>
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>
                            <div className='user_name'>
                                <Input
                                    name='user_name'
                                    id='LoginForm__user_name'
                                    required
                                    placeholder="Username(Required)">
                                </Input>
                            </div>
                            <div className='password'>
                                <Input
                                    name='password'
                                    type='password'
                                    required
                                    id='LoginForm__password'
                                    placeholder="Password(Required)">
                                </Input>
                            </div>
                            <Button className="btn submit_btn" type='submit'>
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </section>
            </React.Fragment >

        )
    }
}