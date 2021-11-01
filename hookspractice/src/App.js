
import React from 'react';
import './App.css';
import CounterTwo from './components/usereducer/CounterTwo';
// import ComponentC from './components/contexthook/ComponentC';
// import CounterOne from './components/usereducer/CounterOne';
// import Datafetch from './components/useeffecthook/Datafetch';
// import Useeffecthook from './components/useeffecthook/Useeffecthook';
//import Usestatehook from './components/usestatehook/Usestatehook';

export const UserContext = React.createContext();
export const FoodContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <Usestatehook ></Usestatehook> */}
      {/* <Useeffecthook></Useeffecthook> */}
      {/* <Datafetch /> */}
      {/* <UserContext.Provider value ={"Nishanth Prabhu"}>
        <FoodContext.Provider value ={"Veg"}>
          <ComponentC></ComponentC>
        </FoodContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      <CounterTwo />
      
    </div>
  );
}

export default App;
