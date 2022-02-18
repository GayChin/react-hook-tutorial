import React, {useRef, useState} from "react";

const UseRef2 = () => {

  const targetElement = useRef(null);
  const [text,setText] = useState("")
  function ClickIt() {
      const targetText = targetElement.current.innerText
      setText(targetText)
  }

  return (
    <div>
      <h1>UseRef2</h1>
      <h2 ref={targetElement}>This is the target text</h2>
      <h4>Display target text here : {text}</h4>
      <button onClick={ClickIt}>Show target text</button>
    </div>
  );
};

export default UseRef2;
