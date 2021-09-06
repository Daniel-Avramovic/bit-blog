import React from 'react';
import { Link } from 'react-router-dom'

const Post = ({post, author, samePost}) => {
    return(
        <main className="container">
        <Link to={'/'}>{`< back`}</Link>
        <h3 className="text-center">{post.title}</h3>
        <Link><h5 className="text-center">{author.name}</h5></Link>
        <p>{post.body}</p><hr />
        <h4>{samePost.length} more posts from same author</h4>
        <ul>
            {samePost.map(post => {
                return(
                    <li>
                        <Link>{post.title}</Link>
                    </li>
                )
            })}
        </ul>
    </main>
    )
}

export default Post;