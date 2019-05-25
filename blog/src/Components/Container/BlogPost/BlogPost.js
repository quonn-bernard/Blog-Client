import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { RatingStars } from '../../RatingStars/RatingStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BlogPost.css'
import { faLink } from '@fortawesome/free-solid-svg-icons'


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
    const style = {
      padding: "10px 0 30px 0",
      marginBottom: "30px",
      borderBottom: ".5px solid lightGrey"
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
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <Link className="" to={`/post/${post.id}`} >

          <h2 style={h2style}>"{post.title}"</h2> <RatingStars rating={post.rating} />
          <p><i style={{ "margin": "15px 0", color: "black", cursor: "pointer" }}>{FaLink} Vist Bookmark Page</i></p>
        </Link>
        {/* <Link className="BlogPostListedItem" to={`/post/${post.id}`} > */}
        {/* <div className='BlogPostListed__image' style={{backgroundImage: `url(${this.state.image})`}} /> */}
        {/* <div className='BlogPostListedText'>
<div className='PostListItem__text'> */}

        {/*<p className='PostListItem__description'>{truncateContent(post.content)}</p> */}
        {/* <h2 className='PostListItem__heading'>{post.snippet.title}</h2>
  <p className='PostListItem__description'>{post.content}</p> */}
        {/* </div> */}

        {/* <div className='PostListItem__comments'> */}
        {/* <ThingStarRating rating={post.average_comment_rating} /> */}
        {/* <span id='PostListItem__comment-count'>{readableCommentCount(post.number_of_comments)}</span> */}
        {/* <span id='PostListItem__comment-count'>{post.number_of_comments}</span> */}

        {/* <p id='PostListItem__comment-count'>Posted on: {post.date_created}</p> */}
        {/* </div>
</div> */}
      </section>

    )
  }
}

function readableCommentCount(number) {
  switch (number) {
    case 0:
      return 'no comments yet'

    case 1:
      return `1 comment`

    default:
      return `${number} comments`
  }
}

function truncateTitle(text) {
  // const words = text.split(' ')

  // if (words.length > 7) {
  //   return words.slice(0, 7).join(' ') + ' ...'
  // }

  return text
}

function truncateContent(text) {
  // const words = text.split(' ')

  // if (words.length > 15) {
  //   return words.slice(0, 10).join(' ') + ' ...'
  // }

  return text
}