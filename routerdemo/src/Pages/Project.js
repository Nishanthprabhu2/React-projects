import React from 'react'
import { useNavigate } from 'react-router-dom'
function Project() {
    const history = useNavigate();
    console.log(history);
    return (
        <div>
            This is the project page
            <button onClick={() => history('/about') } >Go to about</button>
        </div>
    )
}

export default Project
