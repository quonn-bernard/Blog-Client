import React, { Component } from 'react'

const FeedContext = React.createContext({
  feed: [],
  user: '',
  error: null,
  top: '',
  message: '',
  post: '',
  results: [],
  setError: () => { },
  clearError: () => { },
  setFeed: () => { },
  setUser: () => { },
  updatePosition: () => { },
  setCurrentUserPosts: () => { },
  setPost: () => { },
  clearPost: () => {},
  setResults: () => {}
})

export default FeedContext

export class FeedProvider extends Component {

  componentDidMount() {
    window.sessionStorage.getItem("user");
  }

  state = {
    feed: [],
    error: null,
    user: 'Guest',
    top: -99,
    message: "NO MESSAGE HAS BEEN SET",
    c_u_posts: [],
    post: '',
    results: [] 
  };

  updatePosition = () => {
    this.setState({
      top: 100
    }, () => {
      this.timeout = setTimeout(() => {
        this.setState({
          top: -100,
        });
      }, 2000);
    })
  };

  setMessage = message => {
    this.setState({ message })
  }

  setFeed = feed => {
    this.setState({ feed })
  }
  

  setError = error => {
    console.error()
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setUser = user => {
    localStorage.setItem('user', user)
    this.setState({ user })
  }

  setCurrentUserPosts = c_u_posts => {
    this.setState({ c_u_posts })
  }

  setPost = post => {
    console.log('Setting Feed Context post')
    console.log(post)
    this.setState({ post })
  }

  clearPost = () => {
    console.log('Clear Post Context post')
    this.setPost()
    // this.setComments([])
  }

  setResults = results => {
    this.setState({results})
  }

  render() {
    const value = {
      feed: this.state.feed,
      error: this.state.error,
      user: this.state.user,
      message: this.state.message,
      top: this.state.top,
      setError: this.setError,
      clearError: this.clearError,
      setFeed: this.setFeed,
      setUser: this.setUser,
      notification: this.updatePosition,
      setMessage: this.setMessage,
      setCurrentUserPosts: this.setCurrentUserPosts,
      c_u_posts: this.state.c_u_posts,
      setPost: this.setPost,
      clearPost: this.clearPost,
      setResults: this.setResults,
      post: this.state.post,
      results: this.state.results
    }

    return (
      <FeedContext.Provider value={value}>
        {this.props.children}
      </FeedContext.Provider>
    )
  }
}
