import React, { Fragment, useEffect, useState } from "react";
import { getAuthor } from "../../services/getAuthor";
import { getPosts } from "../../services/getPosts";
import { getSinglePost } from "../../services/getSinglePost";
import Loader from "../loader/Loader";
import Post from "../UI/Post";

const SinglePost = ({ match }) => {
  console.log(match);
  const postID = match.params.id;
  const [post, setPost] = useState({});
  const [samePost, setsamePost] = useState([]);
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);

  const getSingle = () => {
    const getPost = async () => {
      const singlePost = await getSinglePost(postID);
      console.log(singlePost);
      setPost(singlePost);
    };
    getPost();
  };
  const onGetAuthor = () => {
    const getSingleAuthor = async () => {
      const author = await getAuthor(post.authorId)
      console.log(author);
      setAuthor(author);
    };
    getSingleAuthor();
  };
  const onGetSamePosts = () => {
    const getSamePost = async () =>{
        let result = [];
        const newPosts = await getPosts();
        newPosts.forEach(post => {
            if(post.authorId === author.id){
                result.push(post)
            }
        });
        console.log(result);
        setsamePost(result);
        setLoading(false);
    }
    getSamePost();
  }

  useEffect(getSingle, [postID]);
  useEffect(onGetAuthor, [post.authorId])
  useEffect(onGetSamePosts, [author.id])

  return (
    <Fragment>
      {loading && <Loader/>}
      <Post post={post} author={author} samePost={samePost} />
    </Fragment>
  )
};

export default SinglePost;
