import React from "react";
import { useDispatch } from "react-redux";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Let's Learn Redux</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
}

export default App;
