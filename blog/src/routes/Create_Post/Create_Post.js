import React, {useContext} from 'react';
import PostForm from '../../Components/PostForm/PostForm';
import { Section } from '../../Components/Utils/Utils';
import NotificationProvider from "../../NotificationContext/NotificationContext";
import Notification from "../../Components/Notifications/Notifications";

class Create_Post extends React.Component {
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

  handlePostSuccess = subscriber => {
    alert('new user created')
    const { history } = this.props
    history.push('/blogFeed')
  }

  updateMessage = () => {
    console.log('xxx')
  };

  render() {
    
    const context = { top: this.state.top, message: this.state.massage, updateMessage: this.state.updateMessage }
    
    return (
      <Section className='RegistrationPage'>
        <h2>Create A Post</h2>
        {/* <button onClick={() => this.fireAlert('Account Created')}>Registration Click</button> */}
        
          {/* <Notification update={this.updateMessage} /> */}
          <PostForm
            onPostSuccess={this.handlePostSuccess}
          />

      </Section>
    )
  }
}

export default Create_Post;