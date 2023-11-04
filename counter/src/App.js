import "./App.css";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [state, setState] = useState({ counter: 0 });
  const onIncrement = () => setState({ counter: state.counter + 1 });
  const onDecrement = () => setState({ counter: state.counter - 1 });
  const onReset = () => setState({ counter: (state.counter = 0) });
  return (
    <div className="container">
      <h1>Counter Application</h1>
      <h1>{state.counter}</h1>
      <Button Children="Increment" onClick={onIncrement}></Button>
      <Button Children="Decrement" onClick={onDecrement}></Button>
      <Button Children="Rest" onClick={onReset}></Button>
    </div>
  );
}

export default App;
