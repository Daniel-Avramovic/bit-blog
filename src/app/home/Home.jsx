import React, { Fragment, useEffect, useState } from "react";
import { getPosts } from "../../services/getPosts";
import Posts from "../UI/Posts";
import Loader from '../loader/Loader'
import "./home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  
    const allPosts = async () => {
      const newPosts = await getPosts();
      console.log(newPosts)
      setPosts(newPosts);
      setLoading(false);
    };
    
 
    useEffect(() => { allPosts() }, [])
    
  return (
    <Fragment>
    {loading && <Loader />}
    <Posts posts={posts} />
    </Fragment>
  );
};

export default Home;
