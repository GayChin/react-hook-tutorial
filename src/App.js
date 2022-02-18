import "./App.css";
import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseContext from "./Hooks/UseContext";
import PropDrilling from "./Hooks/PropDrilling";
import UseRef1 from "./Hooks/UseRef1";
import UseRef2 from "./Hooks/UseRef2"
import UseLayoutEffect from "./Hooks/UseLayoutEffect"

//Uncomment the hook that you want to learn, to see the demo
function App() {
  return (
      <div className="App">
        <header className="App-header">
          {/* <UseState/> */}
          {/* <UseEffect /> */}
          {/* <PropDrilling/> */}
          {/* <UseContext/> */}
          {/* <UseRef1/> */}
          {/* <UseRef2/> */}
          <UseLayoutEffect/>
        </header>
      </div>
  );
}

export default App;


