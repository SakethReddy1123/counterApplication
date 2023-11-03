
import './App.css';
import { useState } from "react";

const [state, setState] = useState({ counter: 0 });
const onIncrement = () => setState({ counter: state.counter + 1 });
const onDecrement = () => setState({ counter: state.counter - 1 });
const onReset = () => setState({ counter: (state.counter = 0) });

function App() {
  return (
    <h1>Counter Application</h1>
  )
}

export default App;
