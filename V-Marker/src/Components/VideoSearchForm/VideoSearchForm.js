import React, { Component } from 'react'
import FeedContext from '../../contexts/FeedContext'
import { Input } from '../Utils/Utils';

class VideoSearchForm extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = FeedContext
  static defaultProps = {
    onPostSuccess: () => { }
  }

  state = { error: null,
            search: ''
           }

  handleSubmit = ev => {

    ev.preventDefault()
    
    const search = ev.target.search.value

    this.props.get(search)
    this.setState({ error: null })

    ev.target.search.value = "";
  }

  handleChange = ev => {
    this.setState({search: ev.target.value})
    this.props.get(this.state.search)
    (this.state.search)
  }

  render() {
    const style = {
      width: "100%",
      height: "40px",
      borderRadius: "5px",
      borderStyle: "solid",
      border: "1px solid lightGray",
      padding: "5px 10px",
      fontSize: "20px"
    };

    const btnStyle = {
      margin: "10px 0 0",
      width: "33%",
      background: "black",
      color: "white",
      padding: "7px",
      borderRadius: "5px"
    }

    const formStyle = {
      textAlign: "left"
    }

    return (

      <React.Fragment>
        <section className="">

          <div className="">

            <form id="video-search-form"
              style={formStyle}
              className='CommentForm'
              onSubmit={this.handleSubmit}>
              <div role='alert'>
              </div>
              <div>
                <Input
                  style={style}
                  name='search'
                  type='text'
                  required
                  id='video-search-box'
                  placeholder="Enter Video Search Term"
                >
                </Input>
              </div>
            </form>

          </div>
        </section>
      </React.Fragment >
    )
  }
}

export default VideoSearchForm

