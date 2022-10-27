import React from "react";
import styled from "styled-components";
//react-icons//
/* import { FaTrash, FaEdit } from "react-icons"; */
import { toast } from "react-toastify";
//import axios//
import axios from "axios";

//styled component//
const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: Opx Opx 5px #ccc;
  border-radius: 5px;
  max-width: 808px;
  margin: 20px auto;
  word-break: break-all;
`;

//export tabela//
export const Thead = styled.thead``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  //media query//
  @media (max-width: 500px) {
    ${(props) => props.onlyweb && "display: none"}
  }
`;

const Grid = ({ users }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th> Email</Th>
          <Th onlyWeb> Fone </Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <TBody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>

            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyweb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
};

export default Grid;
