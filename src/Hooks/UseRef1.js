import React, { useRef, useState , useEffect} from "react";

const UseRef = () => {
  const [name,setName] = useState('')
  const count = useRef(0);

  useEffect(()=>{
    count.current += 1;
  })
  
  return (
    <div>
      <h1>UseRef</h1>
      <input value={name} onChange={e => setName(e.target.value)}></input>
      <h1>My name is {name}</h1>
      <h2>Render {count.current} times</h2>
      <button onClick={()=> count.current++}>Add count</button>
    </div>
  );
};

export default UseRef;
