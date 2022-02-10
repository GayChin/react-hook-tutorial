import React, {useState} from "react";

const UseState = () => {
  const [name, setName] = useState("default-value");

function changeName(string){
    if(name === 'default-value'){
        setName(string)
    }else{
        setName('default-value')
    }
}
  return (
    <div>
      <h1>My name is {name}</h1>
      <button
        onClick={() => {
          changeName("Gay Chin")
        }}
      >Set Name</button>
    </div>
  );
};

export default UseState;
