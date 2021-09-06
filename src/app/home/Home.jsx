import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/getPosts";
import "./home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);

  
    const allPosts = async () => {
      const newPosts = await getPosts();
      console.log(newPosts)
      setPosts(newPosts);
    };
    
 
    useEffect(() => { allPosts() }, [])
    
  return (
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
  );
};

export default Home;
