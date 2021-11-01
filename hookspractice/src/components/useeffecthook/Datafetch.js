import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Datafetch() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(1);
    const [btnId, setBtnId] = useState(1);

    const handleClick = () => {
        setBtnId(id);
    }
    //fetch posts from json server
    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
        .then(response => {
            setPost(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.warn(error);
        })
    }, [btnId])
    return (
        <div>
            <h1>Posts from jsonplaceholder</h1>
            <input type="text" value={id} onChange={e => setId(e.target.value) } />
            {loading && <div>Loading...</div>}
            <div>{post.title}</div>
            <button onClick={handleClick} > load data </button>
            {/* <ul> 
            {posts.map(post => <li key ={post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default Datafetch
