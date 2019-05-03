import React, { Component } from 'react'
import ArticleContext from '../../contexts/ArticleContext'
import ArticleApiService from '../../services/article-api-service'
import { Button, Input, Required, Textarea } from '../Utils/Utils';
// import './CommentForm.css'

class PostForm extends Component {
  static contextType = ArticleContext
  static defaultProps = {
    onPostSuccess: () => { }
  }
  
  state = { error: null }

  handleSubmit = ev => {
    console.log(ev)
    ev.preventDefault()
    const { title, image, content } = ev.target
    this.setState({ error: null })
    // ArticleApiService.postPost(article.id, text.value)
    ArticleApiService.postPost({
      title: title.value,
      image: image.value,
      content: content.value,
    })
      .then(post => {
        title.value = ''
        image.value = ''
        content.value = ''
        this.props.onPostSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
      <div className='title'>
                  <label htmlFor='PostForm__user_name'>
                    Title <Required />
                  </label>
                  <Input
                    name='title'
                    type='text'
                    required
                    id='Post__title'>
                  </Input>
                </div>
                <div className='image'>
                  <label htmlFor='PostForm__image_url'>
                    Image
                  </label>
                  <Input
                    name='image'
                    type='text'
                    id='Post__image'>
                  </Input>
                </div>
        <div className='content'>
        <label htmlFor='PostForm__user_name'>
                    Post Content <Required />
                  </label>
          <Textarea
            required
            aria-label='Enter Post Text...'
            name='content'
            id='content'
            cols='30'
            rows='5'
            placeholder='Enter Post Text...'>
          </Textarea>
        </div>
        <Button class="btn" type='submit'>
          Submit Post
        </Button>
      </form>
    )
  }
}

export default PostForm

