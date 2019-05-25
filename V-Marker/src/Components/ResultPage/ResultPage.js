import React, { Component } from 'react'
import FeedContext from '../../contexts/FeedContext'
import ArticleApiService from '../../services/article-api-service'
import { Link } from "react-router-dom";
import { Section } from '../Utils/Utils'
import Comment from '../Comment/Comment'
import "./ResultPage.css";
import { Button, Textarea, Input } from '../Utils/Utils';
import TokenService from '../../services/token-service';

export default class ResultPage extends Component {

    static defaultProps = {
        match: { params: {} },
        location: {},
        history: {
            push: () => { },
        },
    }

    static contextType = FeedContext

    componentDidMount() {
        this.context.clearError()
        const postId = this.props.match.params
        let post = `https://www.youtube.com/embed/${postId.resultId}`
        this.context.setPost(post)
    }

    componentWillUnmount() {
        this.context.clearPost()
    }

    handleSubmit = ev => {

        ev.preventDefault()

        if (!TokenService.hasAuthToken()) {
            alert("You must be logged in to bookmark a video!")
            return false;
        }
        const { title, image, content, rating } = ev.target
        this.setState({ error: null })

        ArticleApiService.postPost({
            title: title.value,
            image: this.context.post,
            content: content.value,
            rating: rating.value
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
            
        alert("Post Created Successfully!")

        const { location, history } = this.props
        const destination = (location.state || {}).from || '/bmFeed'
        history.push(destination)
    }

    renderPost() {
        const ratingStyle = {
            textAlign: "left",

        }

        const selectStyle = {
            width: "33%",
            height: "40px",
            marginBottom: "30px"
        }

        const commentTitle = {
            height: "50px",
            width: "100%",
            margin: "30px 0"
        }

        const form = {
            width: "100%"
        }

        const textStyle = {
            width: "100%",
            height: "150px"
        }

        const btn = {
            width: "33%",
            float: "left",
            padding: "8px 7px 7px",
            background: "black",
            color: "white",
            borderRadius: "5px"
        }

        const { post = [] } = this.context
        return <>
            <React.Fragment>

                <iframe
                    width="100%"
                    height="315"
                    src={post}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

                <div className="instruction-box">
                    <h4>Watch the video, and if you found it helpful, leave a comment below describing how. Other's will be using these comments so be specific!!</h4>
                </div>

                <form
                    style={form}
                    id=""
                    className='CommentForm'
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
    
                    </div>
                    <div className='title'>

                        <Input
                            style={commentTitle}
                            name='title'
                            type='text'
                            required
                            placeholder="Enter a useful title here..."
                        >
                        </Input>
                    </div>

                    <div className='content'>
                        <Textarea
                            aria-label="Share your thoughts on the video's usefulness here..."
                            name='content'
                            style={textStyle}
                            cols='30'
                            rows='3'
                            placeholder='Leave a comment..'>
                        </Textarea>
                    </div>
                    <div className='select' style={ratingStyle}>
                        <h4><label htmlFor='rating'>Rate This Video!</label></h4>
                        <select
                            style={selectStyle}
                            required
                            aria-label='Rate this thing!'
                            name='rating'
                            id='rating'
                        >
                            <option value='1'>1 Star</option>
                            <option value='2'>2 Stars</option>
                            <option value='3'>3 Stars</option>
                            <option value='4'>4 Stars</option>
                            <option value='5'>5 Stars</option>
                        </select>
                    </div>
                    <Button style={btn} type='submit'>
                        CREATE BOOKMARK
                    </Button>
                </form>
            </React.Fragment>

        </>
    }

    render() {

        const btn = {
            margin: "10px 0 0",
            width: "33%",
            background: "black",
            color: "white",
            padding: "7px",
            borderRadius: "5px"
        }
        const btnBox = {
            textAlign: "left",
            marginTop: "30px"
        }
        const { error, post } = this.context
        let content
        if (error) {
            content = (error.error === `Post doesn't exist`)
                ? <p className='red'>Post not found</p>
                : <p className='red'>There was an erro</p>
        } else if (!post) {
            content = <div className='loading' />
        } else {
            content = this.renderPost()
        }
        return (

            <Section className='PostPage section section-grid'>
                <div></div>
                <div className="section-grid-item">
                    {content}
                    {/* <div style={btnBox}>
                        <Link style={btn} to="">
                            Create Bookmark
                        </Link>
                    </div> */}
                </div>
                <div></div>
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

function PostComments({ comments = [] }) {
    return (
        <ul>
            {comments.map(comment => {
                return <p key={comment.id}>{comment.text}</p>
            })}
        </ul>
    )
}