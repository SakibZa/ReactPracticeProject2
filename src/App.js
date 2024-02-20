import { useState } from 'react';
import './App.css';

function App() {
 // state current value ko rkhta hai ab hmne hooks use nhi kiya hai 
  // is bjah se count ki value add nhi ho rhi hai 
  // let count = 0;
  // function handleADD(){
  //   count += 1; 
  //   console.log(count); 
  // }

  const [count, setCount] = useState(0);
  function handleADD(){
    setCount(count + 1);
  }
  function handleSUB(){
    setCount(count - 1);
  }
  function handleReset(){
    setCount(0);
  }
  return (
    <div className="APP">
      <div className="box">
        <p>{count} </p>
        {/* if we pass handleADD() so it will execute run time  */}
        <button onClick={handleADD} classname = "add">ADD</button> 
               {/* onClick = {()=>setCount(count+1)} */}
        <button onClick={handleSUB} className="sub">SUB</button>
        <button onClick={handleReset} className='reset'></button>
      </div>
    </div>
  );
}

export default App;
