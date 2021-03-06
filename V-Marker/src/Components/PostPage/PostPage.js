import React, { Component } from 'react'
import PostContext from '../../contexts/PostContext'
import ArticleApiService from '../../services/article-api-service'
import { Section } from '../Utils/Utils'
import { RatingStars } from '../RatingStars/RatingStars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../App.css"

export default class PostPage extends Component {

    static defaultProps = {
        match: { params: {} },
    }

    static contextType = PostContext

    componentDidMount() {
        const { postId } = this.props.match.params
        this.context.clearError()
        ArticleApiService.getPost(postId)
            .then((data) => {
                return this.context.setPost(data)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearPost()
    }

    renderPost() {
        const style = {
            textAlign: "left"
        }
        const { post = [] } = this.context
        return <>
            <iframe
                className="mbl-yt-frame"
                width="100%"
                height="250"
                src={post.image}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
            <iframe
                className="yt-frame"
                width="100%"
                height="400"
                src={post.image}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
            <section style={style}>
                <h2>"{post.title}"</h2>
                <RatingStars rating={post.rating} />
                <PostContent post={post.content}></PostContent>
            </section>
        </>
    }

    render() {
        const { error, post } = this.context
        let content
        if (error) {
            content = (error.error === `Post doesn't exist`)
                ? <p className='red'>Post not found</p>
                : <p className='red'>There was an error</p>
        } else if (!post) {
            content = <div className='loading' />
        } else {
            content = this.renderPost()
        }
        return (

            <Section className='PostPage section post-page-grid '>
                <div className="post-page-grid-item"></div>
                <div className="post-page-grid-item">
                    {content}
                </div>
                <div className="post-page-grid-item"></div>
            </Section>
        )
    }
}

function PostContent({ post }) {
    return (
        <p className='PostPage__content'>
            {post}
        </p>
    )
}
