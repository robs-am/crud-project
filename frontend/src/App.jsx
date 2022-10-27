import Global from "./styles/global";
import styled from "styled-components";
import axios from "axios";

import { useState, useEffect } from "react";


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

  //função recebe assincronamente infos do banco de dados//

  const getUsers = async() => {
    try{
      const res = await axios.get("localhost:8800"); //response, await and axios fazendo um GET
      setUsers(res.data.sort((a,b) =>(a.nome > b.nome ? -1 :1))); //sort, sorteará por ordem alfabética
    } catch (error) {
      toast.error(error);  //pop-up toast de error
    }
  };

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
