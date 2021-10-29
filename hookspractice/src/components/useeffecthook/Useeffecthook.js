import React, { useState, useEffect } from "react";
import Effectutil from "./Effectutil";

function Useeffecthook() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [mountUtil, setMountUtil] = useState(false);
  const [time, setTime] = useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  const tick = () => {
    setTime(time + 1);
  };
  //Tihis runs initially  and then after every render based on the send paremeter passed to conditionally re render
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  //call the useeffect only once to add event listener by supplying empty arry as 2nd argument
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [time, tick]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count
      </button>
      <p>{name}</p>
      <div>
        <p>Your Mouse Mosition : </p>
        X: {x} Y: {y}
      </div>
      <button onClick={() => setMountUtil(!mountUtil)}>Toggle Mount</button>
      {mountUtil && <Effectutil></Effectutil>}

      <div>
        <p>Time : {time}</p>
      </div>
    </div>
  );
}

export default Useeffecthook;
