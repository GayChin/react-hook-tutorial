import React, {useEffect, useLayoutEffect, useRef,useState} from "react";

const UseLayoutEffect = () => {
    const [show,setShow] = useState(false);

    //use useRef to grab element
    const button = useRef(null)
    const popup = useRef(null)
    
    //uncomment this if you would like to see the flickering
    // useEffect(()=>{
    //     //ensure popup button exist 
    //     if(popup.current !== null && button.current !== null){
    //         const buttonPos = button.current.getBoundingClientRect();
    //         console.log(popup.current)
    //         popup.current.style.top =  `${buttonPos.bottom + 25}px`
    //     }
    // },[show])
 
    useLayoutEffect(()=>{
        if(popup.current !== null && button.current !== null){
            const buttonPos = button.current.getBoundingClientRect();
            console.log(popup.current)
            popup.current.style.top =  `${buttonPos.bottom + 250}px`
        }
    },[show])
  
  return (
    <>
      <h1>UseLayoutEffect</h1>
      <button ref={button} onClick= {()=>setShow(prev => !prev)}>Click to trigger popup</button>
      {show && <div style={{position: "absolute"}} ref={popup}> This is a popup</div>}
    </>
  );
};

export default UseLayoutEffect;
