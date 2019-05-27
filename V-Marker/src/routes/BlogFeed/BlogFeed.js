import React from 'react';
import FeedContext from "../../contexts/FeedContext";
import BlogPost from '../../Components/BlogPost/BlogPost';
import AccountPanel from '../../Components/AccountPanel/AccountPanel';
import SearchResult from '../../Components/SearchResult/SearchResult';
import VideoSearchForm from '../../Components/VideoSearchForm/VideoSearchForm';
import ArticleApiService from "../../services/article-api-service";
import { Link } from "react-router-dom";
import Tabs from '../../Components/Tabs/Tabs';
import "./BlogFeed.css";

class BlogFeed extends React.Component {

  constructor(props) {
    super(props)
    this.getVideosResult = this.getVideosResult.bind(this);
  }

  static contextType = FeedContext;

  componentDidMount() {
    this.context.clearError()
    ArticleApiService.getPosts()
      .then(this.context.setFeed)
      .catch(this.context.setError)
  }

  //Makes youtube query
  getVideosResult(term) {
    ArticleApiService.getVideos(term)
      .then(data => data.json())
      .then(data => data.items)
      .then(this.context.setResults)
  }

  // Renders youtube api query results
  renderResults() {
    const { results = [] } = this.context

    return results.map((post, i) => {
      console.log(results)
      let id = i * Math.floor(Math.random() * 20)

      return <React.Fragment>
        <SearchResult
          key={id}
          result={post}
        />
      </React.Fragment>
    }
    )
  }

  renderPosts() {

    const { feed = [] } = this.context

    return feed.map((post, i) => {
      
      let id = i * Math.floor(Math.random() * 20)

      return <React.Fragment key={id}>
        <BlogPost
          post={post}
        />
      </React.Fragment>
    }

    )
  }

  render() {
    // Additional styling for feed
    const textStyle = {
      textAlign: "left",
      marginBottom: "37px"
    }
    const { error = [] } = this.context
    return (
      <section className="feed-container">
        <div className="feed-grid">
          <div className="spacerLeft"></div>
          <div className="feed-grid-item" style={textStyle}>
            <Tabs>
              <div label="Bookmarks">
                {
                  // Renders if api call to database is successful
                  !error
                    ? this.renderPosts()
                    : <p>Oops!!! Looks like no bookmarks have been created yet!</p>
                }
              </div>
              <div label="Video Search">
                <VideoSearchForm get={this.getVideosResult}></VideoSearchForm>
                {
                  // Renders if api call to database is successful
                  !error
                    ? this.renderResults()
                    : <p>Enter a search term into the box then press enter!</p>
                }
              </div>
            </Tabs>
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


