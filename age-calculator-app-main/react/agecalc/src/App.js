import { useState, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <div></div>
      <form>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
      </form>
      <p ref={resultRef}>{result}</p>
    </div>
  );
}

export default App;
