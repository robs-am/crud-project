import React from "react";
import styled from "styled-components";
//react-icons//
import { FaTrash, FaEdit } from "react-icons";
import { toast } from "react-toastify";
//import axios//
import axios from "axios";

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

export const Thead = styled.thead``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props = props.onlyweb && "display: none")}
  }
`;

const Grid = () => {
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
    </Table>
  );
};

export default Grid;
