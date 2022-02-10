import React from "react";

const Component1 = ({count}) => {
  return (
    <div>
      <p>This is component 1 !</p>
      <Component2 count={count} />
    </div>
  );
};

const Component2 = ({count}) => {
  return (
    <div>
      <p>This is component 2 !</p>
      <Component3 count={count} />
    </div>
  );
};

const Component3 = ({count}) => {
  return (
    <div>
      <p>This is component 3 !</p>
      <Component4 count={count} />
    </div>
  );
};

const Component4 = ({count}) => {
  return (
    <div>
      <p>This is component 4 !</p>
      <Component5 count={count} />
    </div>
  );
};

const Component5 = ({count}) => {
  return (
    <div>
      <p>This is component 5 !</p>
      <p>The count passed from parents component is : {count}</p>
    </div>
  );
};

const PropDrilling = () => {
  return (
    <div>
      <h1>Prop Drilling</h1>
      <Component1 count={888} />
    </div>
  );
};

export default PropDrilling;
