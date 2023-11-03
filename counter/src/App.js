import "./App.css";
import Button from "./Button";
import { useState } from "react";


const [state, setState] = useState({ counter: 0 });
const onIncrement = () => setState({ counter: state.counter + 1 });
const onDecrement = () => setState({ counter: state.counter - 1 });
const onReset = () => setState({ counter: (state.counter = 0) });

function App() {
  return (
    <>
      <h1>Counter Application</h1>
      <Button Children= 'Increment' onClick = {''} ></Button>
      <Button Children= 'Decrement' onClick = {''} ></Button>
      <Button Children= 'Rest' onClick = {''} ></Button>
    </>
  );
}

export default App;
