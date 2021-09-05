import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../entities/post';
import './home.css'
const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        let result = []
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url).then(response => response.json()).then(data => {
            data.forEach(res => {
                result.push(new Post(res.id, res.userId, res.title, res.body))
            })
            setPosts(result);
        })
    }, [])

    return(
        <main className="container">
            <h1 className="text-center">Posts</h1>
            <ul>
                {posts.map((post, index) => {
                    return(
                        <li key={index}>
                            <Link to={`/post/${post.id}`}><h5>{post.title}</h5></Link>
                            <p>{post.body}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Home;