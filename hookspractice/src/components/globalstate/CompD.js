import React, { useContext, useEffect } from 'react'
import { globalCountContext } from '../../App'
//A
//B=>D
//C=>E=>F


function CompD() {
    const { countState, countDispatch } = useContext(globalCountContext);
   
    return (
        <div>
            <h1>CompD== { countState }</h1>
            <button onClick={() => countDispatch('decrement')} >Decrement</button>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompD