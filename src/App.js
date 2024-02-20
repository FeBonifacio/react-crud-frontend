import axios from "axios";

import styled from "styled-components";

import Form from "./components/Form.js";
import Grid from "./components/Grid.js";

import { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  const [users, setUsers] = useState([]); //usuarios
  const [onEdit, setOnEdit] = useState(null); //editar usuarios

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1: -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
    <Container>
        <Title>USUÁRIOS</Title>
          <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} /> 
          <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
      </Container>
    </>
  );
}

export default App;
