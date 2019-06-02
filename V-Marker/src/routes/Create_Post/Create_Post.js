import React, {useContext} from 'react';
import PostForm from '../../Components/PostForm/PostForm';
import { Section } from '../../Components/Utils/Utils';

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
  
  //invoked after create post form input has been validated
  handlePostSuccess = subscriber => {
    alert('new user created')
    const { history } = this.props
    history.push('/bmFeed')
  }

  render() {
    const context = { top: this.state.top, message: this.state.massage, updateMessage: this.state.updateMessage }
    // return Create Post Component html(JSX)
    return (
      // Beginning of page
      <Section className='RegistrationPage'>
        <h2>Create A Post</h2>
          {/* Blog post creation form component */}
          <PostForm
            onPostSuccess={this.handlePostSuccess}
          />
      </Section>
    )
  }
}

export default Create_Post;