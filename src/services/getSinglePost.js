import { Post } from "../entities/post";

export const getSinglePost = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url);
  const post = await response.json();
  return new Post(post.id, post.userId, post.title, post.body);
};
