import React from 'react'
import { useParams } from 'react-router-dom';
function Home() {
    const {name} = useParams();
    return (
        
        <div>
            This Home Page. You are {name}
        </div>
    )
}

export default Home
