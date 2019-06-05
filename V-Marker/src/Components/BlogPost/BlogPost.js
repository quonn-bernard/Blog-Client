import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { RatingStars } from '../RatingStars/RatingStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import './BlogPost.css'

export default class PostListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: ""
    }
  }

  render() {
    const FaLink = <FontAwesomeIcon icon={faLink} className="link"/>
    const { post } = this.props
    const h2style = {
      marginTop: "0",
      marginBottom: "5px",
      display: "block",
      color: "black"
    }
    post.image === ""
      ? this.state.image = "https://picsum.photos/300"
      : this.state.image = post.image
    return (
      <section className="postBox">
        <iframe
          width="100%"
          height="250px"
          src={post.image}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope;"
          >
        </iframe>
        <Link className="" to={`/post/${post.id}`} >
          <h2 style={h2style}>"{post.title}"</h2> <RatingStars rating={post.rating} />
          <p>
            <i style={{ "margin": "15px 0", color: "black", cursor: "pointer" }}>{FaLink} Vist Bookmark Page</i>
          </p>
        </Link>
      </section>
    )
  }
}

