import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        return (
            <Link className="BlogPostListedItem"  to={`/result/${result.id.videoId}`} >
                <div className='BlogPostListed__image' style={{ backgroundImage: `url(${this.state.image})` }} />
                <div className='BlogPostListedText'>
                    <div className='PostListItem__text'>
                        <h2 className='PostListItem__heading'>{result.snippet.title}</h2>
                        <h4>Channel: {result.snippet.channelTitle}</h4>
                        <p className='PostListItem__description'>{result.snippet.description}</p>
                    </div>
                </div>
            </Link>
        )
    }
}



