import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 0,
    thirdCounter: 0
}

const reducer = (state, action) => { 
    switch (action.type) {
        case 'increment':
            return{...state, firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return{...state, secondCounter : state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset': 
            return initialState
        case 'reset2':
            return {...state, secondCounter: initialState.secondCounter}
        default: 
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
           <h2>First counter -{count.firstCounter}</h2> 
                <button onClick = {() => dispatch({type: 'increment', value: 1})} >Increment</button>
                <button onClick = {() => dispatch({type: 'decrement', value: 1})} >Decrement</button>
                <button onClick = {() => dispatch({type: 'reset'})} >Reset</button>
              <h2>Second counter -{count.secondCounter}</h2>
                <button onClick = {() => dispatch({type: 'increment2', value: 1})} >Increment</button>
                <button onClick = {() => dispatch({type: 'decrement2', value: 1})} >Decrement</button>
                <button onClick = {() => dispatch({type: 'reset2'})} >Reset</button>
            <div>
                <h2>Using multiple useReducer hooks</h2>
                <p>Multiple reducer counter-- {count2.thirdCounter}</p>
                <button onClick = {() => dispatch2({type: 'increment', value: 1})} >Increment</button>
                <button onClick = {() => dispatch2({type: 'decrement', value: 1})} >Decrement</button>
                <button onClick = {() => dispatch2({type: 'reset'})} >Reset</button>
            </div>
        </div>
    )
}

export default CounterTwo
 