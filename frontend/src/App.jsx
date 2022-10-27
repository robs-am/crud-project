import Global from "./styles/global";
import styled from "styled-components";

import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "./components/Form/form";
import Grid from "./components/Grid/Grid";



const Container = styled.div`
width: 100%;
max-width: 800px;
margin-top: 20px;
display: flex;
flex-direction : column;
align-items: center;
gap: 10px;
`;

const Title = styled.h2 ``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  
  return (
    <>
    <Container>
      <Form />
      <Grid />
    </Container>
      <Global />
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      
    
    </>
  );
}

export default App;
