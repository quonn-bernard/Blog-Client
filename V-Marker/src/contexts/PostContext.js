import React, { Component } from 'react'

export const nullPost = {
  author: {},
  tags: [],
}

const PostContext = React.createContext({
  post: nullPost,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setPost: () => {},
  clearPost: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default PostContext

export class PostProvider extends Component {
  state = {
    post: nullPost,
    error: null,
    comments: []
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    console.log('Post Context is accessed')
    this.setState({ error: null })
  }

  setPost = post => {
    console.log('Setting Post Context post')
    console.log(post)
    this.setState({ post })
  }

  setComments = comments => {
    console.log('Set Comments Post Context', comments)
    this.setState({ comments })
  }

  clearPost = () => {
    console.log('Clear Post Context post')
    this.setPost(nullPost)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      post: this.state.post,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPost: this.setPost,
      setComments: this.setComments,
      clearPost: this.clearPost,
      addComment: this.addComment,
    }
    
    return (
      <PostContext.Provider value={value}>
        {this.props.children}
      </PostContext.Provider>
    )
  }
}