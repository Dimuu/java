
import { useState } from 'react';
import './App.css';

function App() {
  const date = new Date().toLocaleTimeString()
  const [amg, setAmg] = useState(0)
  const [clock, setClock] = useState(date)

  function watch(){
    const date = new Date().toLocaleTimeString()
    setClock(clock => date)
  }

  setTimeout(watch, 1000)

function plus(){
  setAmg(amg + 1)
}
function minus(){
  if(amg > 0){
    setAmg(amg - 1)
  }
}

function resent(){
  setAmg(amg => amg =0)
}

  return (
    <div className="App">
      <span className='clock'>{clock}</span>
      <h1 className='counter'>{amg}</h1>
      <button className='btn' onClick={plus} >+</button>
      <button className='btn' onClick={minus} >-</button>
      <button className='btn' onClick={resent} >Reset</button>
    </div>
  );
}

export default App;
