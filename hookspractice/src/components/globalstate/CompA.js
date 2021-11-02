import React, { useContext } from 'react'
import { globalCountContext } from '../../App'
//A
//B=>D
//C=>E=>F


function CompA() {
    const countContext = useContext(globalCountContext)
    return (
        <div>
            <h1>CompA== { countContext.countState }</h1>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')} >Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompA
