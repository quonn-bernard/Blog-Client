import React from 'react';
import "./BlogPost.css"
const BlogPost = () =>  {

    return (
        <div>
            <div className="img-box flexed main-panels">
            Blog Post Image
            </div>
            <article className="post-content flexed main-panels">
                Post Content
            </article>
            <section className="comments-content flexed main-panels">
                Comments
            </section>
        </div>
    )
}

export default BlogPost;