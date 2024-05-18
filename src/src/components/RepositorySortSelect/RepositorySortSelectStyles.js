import styled from "styled-components";

export const Select = styled.select`
  align-self: flex-end;
  width: 170px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: #2a2a2a;

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  border: 1px solid red;
  background-color: #f0f0f0;
  color: #333;
  padding: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 40px;
`;
