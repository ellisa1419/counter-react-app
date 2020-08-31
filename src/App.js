import React from 'react';
import Counter from "./Counter";
import "./index.css";
import './App.css';

function App() {
  return (
    <div>
      <Counter count={10} />
      <Counter count={20} />
      <Counter count={30} />
      {/* <Counter/> */}
  </div>
  );
}

export default App;
