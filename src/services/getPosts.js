import { Post } from "../entities/post";

export const getPosts = async () => {
  let result = [];
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const allPost = await response.json();
  allPost.forEach((post) => {
    result.push(new Post(post.id, post.userId, post.title, post.body));
  });
  return result;
};

