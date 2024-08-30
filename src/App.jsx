import { useState } from "react";
import "./App.css";
import { useReducer } from "react";

const initialstate={isVisible: false};

const reducer = (state, action) => {
    switch(action.type){
      case 'TOGGLE':
        return { isVisible: !state.isVisible};
      default:
        return state;
    }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

const toggleMassage = () => {
  dispatch({type: 'TOGGLE'})
}
  return (
    <>
     <div className="App">
  
     <button onClick={toggleMassage}>
      {
        state.isVisible ? "Hide Message" : "Show Message"
      }
     </button>

     {
      state.isVisible && 
      <p>Hello, You can hide this msg by clicking on above botton</p>
     }
     </div>
    </>
  );
}

export default App;
