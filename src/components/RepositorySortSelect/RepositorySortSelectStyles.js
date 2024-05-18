import styled from "styled-components";

export const Select = styled.select`
  width: 170px;
  border: none;
  background: transparent;
  color: #2a2a2a;
  outline: none;
  align-self: end;
  /* -webkit-appearance: menulist; */

  &:hover {
    cursor: pointer;
  }
`;

export const Option = styled.option`
  border: 1px solid red;
  background-color: #f6f8fa;
  color: #2a2a2a;
  padding: 8px;
`;
