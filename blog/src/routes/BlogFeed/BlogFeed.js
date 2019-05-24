import React from 'react';
import FeedContext from "../../contexts/FeedContext";
import BlogPost from '../../Components/Container/BlogPost/BlogPost';
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

  getVideosResult(term) {
    console.log(term)
    ArticleApiService.getVideos(term)
      // 
      .then(data => data.json())
      .then(data => data.items)
      .then(this.context.setResults)
    // .then(data => 
    //   // (console.log(data.items[1].snippet)))
    //   (console.log(data.items)))

  }

  renderResults() {
    const { results = [] } = this.context
    console.log(this.context.results)
    return results.map((post, i) => {
      let id = i * Math.floor(Math.random() * 20)
      return <React.Fragment>
        <SearchResult
          // key={post.id.videoId}
          result={post}
        />
      </React.Fragment>

    }
    )

  }

  renderPosts() {
    const { feed = [] } = this.context
    console.log(this.context)
    return feed.map((post, i) => {
      let id = i * Math.floor(Math.random() * 20)
      return <React.Fragment>
        <BlogPost
          // key={post.id.videoId}
          post={post}
        />
      </React.Fragment>
    }
    )
  }

  render() {
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
                  !error
                    ? this.renderPosts()
                    : <p>No Posts have been created, but the good news is that you can create one
                <Link
                        to='/create_post'>
                        here
               </Link>
                    </p>}

              </div>
              <div label="Video Search">
                <VideoSearchForm get={this.getVideosResult}></VideoSearchForm>
                {
                  !error
                    ? this.renderResults()
                    : <p>No Posts have been created, but the good news is that you can create one
                <Link
                        to='/create_post'>
                        here
               </Link>
                    </p>}
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


