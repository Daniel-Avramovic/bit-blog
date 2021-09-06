import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({posts}) => {
    return(
        <main className="container">
      <h1 className="text-center">Posts</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={`/post/${post.id}`}>
                <h5>{post.title}</h5>
              </Link>
              
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </main>
    )
};

export default Posts;