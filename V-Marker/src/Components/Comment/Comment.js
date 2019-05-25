import React, { Component } from 'react'
import PostContext from '../../contexts/PostContext'
import ArticleApiService from '../../services/article-api-service'
import { Button, Textarea } from '../Utils/Utils';

class Comment extends Component {
  static contextType = PostContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { post } = this.context
    const { text } = ev.target
    ArticleApiService.postComment(post.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <section className="section section-grid">
      <div></div>
      <div className="section-grid-item">
        
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Leave a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Leave a comment..'>
          </Textarea>
        </div>

        <Button type='submit'>
          Submit Comment
        </Button>
        
      </form>
      </div>
    </section>

    )
  }
}

export default Comment