import {React, useRef} from "react";
import styled from "styled-components";

//styled-components//

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;

`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;


const Form = ({onEdit}) => {
    const ref = useRef();

  return (
    <div>
      <FormContainer>

      </FormContainer>
    </div>
  );
};

export default Form;
