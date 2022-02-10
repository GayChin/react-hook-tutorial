import React, {useEffect, useState} from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("render!");
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
      setData(response)
    );
  }, [count]);

  function addCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    //things to do when component mounted, and update

    return () => {
      //things to do, when component leaves UI
    };
  }, []); //array of dependencies, if dependency changes trigger re-render

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => addCount()}>Add Count By 1</button>
      <h2>Current count is : {count}</h2>
    </div>
  );
};

export default UseEffect;
