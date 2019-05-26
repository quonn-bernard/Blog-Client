import React, { Component } from 'react'
import FeedContext from '../../contexts/FeedContext'
import ArticleApiService from '../../services/article-api-service'
import { Button, Input, Required, Textarea } from '../Utils/Utils';

class PostForm extends Component {
  static contextType = FeedContext
  static defaultProps = {
    onPostSuccess: () => { }
  }

  state = { error: null }

  handleSubmit = ev => {
    console.log(ev)
    ev.preventDefault()
    const { title, image, content } = ev.target
    this.setState({ error: null })

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
      <React.Fragment>
        <section className="section section-grid">
          <div></div>
          <div className="section-grid-item">
            <form id="contact-form"
              className='CommentForm'
              onSubmit={this.handleSubmit}>
              <div role='alert'>
              </div>
              <div className='title'>
                <Input
                  name='title'
                  type='text'
                  required
                  id='Post__title'
                  placeholder="Title"
                >
                </Input>
              </div>
              <div className='image'>
                <Input
                  name='image'
                  type='text'
                  id='Post__image'
                  placeholder="Image"
                >
                </Input>
              </div>
              <div className='content'>
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
              <Button className="btn submit_btn" type='submit'>
                SUBMIT
              </Button>
            </form>
          </div>
        </section>
      </React.Fragment >
    )
  }
}

export default PostForm

