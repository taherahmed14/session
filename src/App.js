import { useRef, useState } from 'react';
import './App.css';
//import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const inputRef = useRef(null);
  return (
    <div className="App">
      {/* <div ref={inputRef} style={{
        width:"400px",
        height:"400px",
        backgroundColor: "aquamarine"
        }}>
    </div>
    <div style={{
        width:"400px",
        height:"400px",
        backgroundColor: "coral"
        }}>
    </div>
    <div style={{
        width:"400px",
        height:"400px",
        backgroundColor: "aquamarine"
        }}>
    </div>
    <div style={{
        width:"400px",
        height:"400px",
        backgroundColor: "coral"
        }}>
    </div>
      {/* <input ref={inputRef} /> */}
      {/* <button onClick={() => {
        inputRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }}>Got to top</button> */} 
      <Table />
    </div>
  );
}

export default App;

//useRef code
// const test = useRef(1);
// const [show, setShow] = useState(1);
// console.log(test);

// <button onClick={() => {
//         test.current = test.current + 1;
//         console.log(test);
//       }}>
//         Increment
//       </button>

//       <button onClick={() => {
//         //force re-rendering
//         //To re-render react must know if there is any change to re-render
//         setShow((el) => el+1);
//       }}>
//         Render
//       </button>
