import React from 'react';
import FeedContext from "../../contexts/FeedContext";
import BlogPost from '../../Components/Container/BlogPost/BlogPost';
import AccountPanel from '../../Components/AccountPanel/AccountPanel';
import ArticleApiService from "../../services/article-api-service";
import { Link } from "react-router-dom";
import "./BlogFeed.css";

class BlogFeed extends React.Component {

  static contextType = FeedContext;

  componentDidMount() {
    this.context.clearError()

    ArticleApiService.getPosts()
      .then(this.context.setFeed)
      .catch(this.context.setError)
  }

  renderPosts() {
    const { feed = [] } = this.context
    return feed.map(post =>
      <BlogPost
        key={post.id}
        post={post}
      />
    )
  }

  render() {
    const { error = [] } = this.context
    return (
      <section className="feed-container">
        <div className="feed-grid">
          <div className="spacerLeft"></div>
          <div className="feed-grid-item">
            {
              !error
                ? this.renderPosts()
                : <p>No Posts have been created, but the good news is that you can create one
                <Link
                    to='/create_post'>
                    here
               </Link>
                </p>}
          </div>
          <div className="spacerRight">
            <div className="side-panels flexed">
              <AccountPanel className="side-panel-content" user={this.context.user}></AccountPanel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogFeed;


