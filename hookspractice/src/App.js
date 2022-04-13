import React, { useReducer } from "react";
import "./App.css";
import usePagination from "./components/myHooks/usePagination";
// import CompA from "./components/globalstate/CompA";
// import CompB from "./components/globalstate/CompB";
// import CompC from "./components/globalstate/CompC";
// import ExampleOne from "./components/userefhook/ExampleOne";
// import HootTimer from "./components/userefhook/HootTimer";
// import CounterTwo from './components/usereducer/CounterTwo';
// import ComponentC from './components/contexthook/ComponentC';
// import CounterOne from './components/usereducer/CounterOne';
// import Datafetch from './components/useeffecthook/Datafetch';
// import Useeffecthook from './components/useeffecthook/Useeffecthook';
//import Usestatehook from './components/usestatehook/Usestatehook';

export const UserContext = React.createContext();
export const FoodContext = React.createContext();
export const globalCountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <globalCountContext.Provider value={{
    //   countState: count,
    //   countDispatch: dispatch
    // }}>
    <div className="App">
      {/* <Usestatehook ></Usestatehook> */}
      {/* <Useeffecthook></Useeffecthook> */}
      {/* <Datafetch /> */}
      {/* -------------------------CONTEXT HOOK---------------------- */}
      {/* <UserContext.Provider value ={"Nishanth Prabhu"}>
        <FoodContext.Provider value ={"Veg"}>
          <ComponentC></ComponentC>
        </FoodContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}

      {/*---------------- GLOBAL STATE------------------ */}
      {/* 
      //GLOBAL STATE
      //A
      //B=>D
      //C=>E=>F
       */}

      {/* <CompA />
        <CompB />
        <CompC /> */}

      {/* ---------------------USEREF HOOK----------------------- */}
      {/* <ExampleOne /> */}
      {/* <HootTimer /> */}

      <usePagination />
    </div>
    // </globalCountContext.Provider>
  );
}

export default App;
