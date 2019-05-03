import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import "./BlogFeed.css";
class BlogFeed extends React.Component {
  render() {
    return (
      <section className="feed-container">
        <div className="feed-grid">
          <div className="spacerLeft"></div>
          <div className="feed-grid-item">
            <h1>Blog Feed</h1>
            <BlogPost></BlogPost>
          </div>
          <div className="spacerRight">
            <div className="side-panels flexed">
              {/* Future Account Panel Component */}
              <div className="side-panel-content">Categories</div>
            </div>
            <div className="side-panels flexed">
              {/* Future Account Panel Component */}
              <div className="side-panel-content">Account Panel</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogFeed;


