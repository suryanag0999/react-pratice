import React, { useEffect, useRef, useState } from 'react';
import './styles.css'

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((perv)=>perv+1)
      },1000)
      
    }
    return () => {
      clearInterval(intervalRef.current)
    };
  }, [isRunning]);

  const start = () => {
    setisRunning(true)
  }

  const stop = () => {
    setisRunning(false)
  }

  const reset = () => {
    setisRunning(false)
    setSeconds(0)
  }

  const formattime = (seconds)=>(seconds/100).toFixed(2)

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Time: {formattime(seconds)}s</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;