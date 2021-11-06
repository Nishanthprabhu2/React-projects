import React from 'react'
import { useLocation } from 'react-router-dom'
function PageNotFound() {
    const location = useLocation()
    return (
        <div>
            Sorry the page you are looking for <strong>{location.pathname}</strong> does not exist!
        </div>
    )
}

export default PageNotFound
