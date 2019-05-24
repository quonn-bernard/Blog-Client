import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './BlogPost.css'

export default class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ""
        }
    }

    render() {
        
        const { result } = this.props
        result.image === ""
            ? this.state.image = "https://picsum.photos/300"
            : this.state.image = result.snippet.thumbnails.high.url
        const videoId = result.id.videoId;
        // console.log(post.id.video)
        return (
    
                <Link className="BlogPostListedItem" to={`/result/${result.id.videoId}`} >

                    <div className='BlogPostListed__image' style={{ backgroundImage: `url(${this.state.image})` }} />

                    <div className='BlogPostListedText'>
                        <div className='PostListItem__text'>
                            {/* <h2 className='PostListItem__heading'>{truncateTitle(post.title)}</h2>
<p className='PostListItem__description'>{truncateContent(post.content)}</p> */}
                            <h2 className='PostListItem__heading'>{result.snippet.title}</h2>
                            <h4>Channel: {result.snippet.channelTitle}</h4>
                            <p className='PostListItem__description'>{result.snippet.description}</p>
                        </div>

                        <div className='PostListItem__comments'>

                            {/* <ThingStarRating rating={post.average_comment_rating} /> */}
                            {/* <span id='PostListItem__comment-count'>{readableCommentCount(post.number_of_comments)}</span> */}

                            <span id='PostListItem__comment-count'>{result.number_of_comments}</span>

                            {/* <p id='PostListItem__comment-count'>Posted on: {post.date_created}</p> */}

                        </div>

                    </div>
                </Link>
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