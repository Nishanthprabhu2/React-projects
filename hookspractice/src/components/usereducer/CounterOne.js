import React, { useReducer } from 'react'

// here the initial state is primitive, so we don't need to use the action
//  type and vaoue in the reducer function.

//---------skeleton of reducer------------
//  initial state
// reducer function==> takes in state and action returns new state 
// useReduce hook ==> takes in reducer function and initial state
//  returns array of state and dispatch function
//
const initialState =  0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')} >Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
