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
        console.log(result)
        result.image === ""
            ? this.state.image = "https://picsum.photos/300"
            : this.state.image = result.snippet.thumbnails.high.url
        const videoId = result.id.videoId;
        return (
            <Link className="BlogPostListedItem" key={videoId} to={`/result/${result.id.videoId}`} >
                <div className='BlogPostListed__image' style={{ backgroundImage: `url(${this.state.image})` }} />
                <div className='BlogPostListedText'>
                    <div className='PostListItem__text'>
                        <h2 className='PostListItem__heading'>{result.snippet.title}</h2>
                        <h4>Channel: {result.snippet.channelTitle}</h4>
                        <p className='PostListItem__description'>{result.snippet.description}</p>
                    </div>
                    <div className='PostListItem__comments'>
                        <span id='PostListItem__comment-count'>{result.number_of_comments}</span>
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