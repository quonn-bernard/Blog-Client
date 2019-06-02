import React from 'react';
import FeedContext from "../../contexts/FeedContext";
import ArticleApiService from "../../services/article-api-service";


class SubscriberPage extends React.Component {

    static defaultProps = {
        match: { params: {} },
    }
    
  static contextType = FeedContext;

  componentDidMount() {
    const userName = localStorage.getItem('user')
    this.context.clearError()
    ArticleApiService.getUserAccount(userName)
      .then(this.context.setCurrentUserPosts)
      .catch(this.context.setError)
  }

  renderPosts() {
    const { userPosts = [] } = this.context
    return userPosts.map(post =>
      <UserPost
        post={post}
      />
    )
  }

  render() {
    
    const { error = [] } = this.context
    return (
      this.renderPosts()
    );
  }
}

export default SubscriberPage;

function UserPost({ userPosts = [] }) {
    return (
        <ul>
                {userPosts.map(post => {
                   return <p>{post}</p>
                })}
        </ul>
    )
}

