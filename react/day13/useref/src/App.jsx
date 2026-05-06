import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  }


  const input = useRef(null);

  const handlechange = (e) => {
    console.log(input.current.value);
  }


    const inputclear = useRef();

  const handleClear = () => {
    inputclear.current.value = "";
  };


   const [count, setCount] = useState(0);
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = count;
  }, [count]);




  return (
  <>
   <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>


    <div>
      <input ref={input} type="text" placeholder='Enter your Name' />
      <button onClick={handlechange} type="submit">Submit</button>
    </div>


     <div>
      <input ref={inputclear} type="text" />
      <button onClick={handleClear}>Clear</button>
    </div>

    <div>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  
  </>
  )
}

export default App