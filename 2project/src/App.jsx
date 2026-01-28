import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    console.log("clicked", counter + 1);
  };

  const removeValue = () => {
    setCounter((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <>
      <h1>bhai kaise ho</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
};

export default App;
