import React, {createContext, useContext, useState} from "react";

const NameContext = createContext();

const Component1 = () => {
  const [count, setCount] = useState(888);
  function addCount() {
    setCount(count + 1);
  }

  return (
    <NameContext.Provider value={{count, addCount}}>
      <div>
        <p>This is component 1 !</p>
        <Component2 />
      </div>
    </NameContext.Provider>
  );
};

const Component2 = () => {
  return (
    <div>
      <p>This is component 2 !</p>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  return (
    <div>
      <p>This is component 3 !</p>
      <Component4 />
    </div>
  );
};

const Component4 = () => {
  return (
    <div>
      <p>This is component 4 !</p>
      <Component5 />
    </div>
  );
};

const Component5 = () => {
  const {count, addCount} = useContext(NameContext);
  return (
    <div>
      <p>This is component 5 !</p>
      <p>The name passed from parents component is : {count}</p>
      <button onClick={addCount}>Add count by 1</button>
    </div>
  );
};

const UseContext = () => {
  return (
    <div>
      <h1>Prop Drilling</h1>
      <Component1 />
    </div>
  );
};

export default UseContext;
