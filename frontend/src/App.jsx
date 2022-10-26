import Global from "./styles/global";
import styled from "styled-components"; 

import {toast, ToastContainer, toastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <div className="App">
      <Global />
      <ToastContainer autoClose={3000} position={toastContainer.POSITION.BOTTON_RIGHT}/>
      <h1>alow</h1>
    </div>
  );
}

export default App;
