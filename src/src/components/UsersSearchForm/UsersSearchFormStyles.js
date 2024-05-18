import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export const SearchIcon = styled(BiSearch)`
width: 30px;

&:hover {
  cursor: pointer;
}
`

export const Form = styled.form`
  display: flex;
  border-radius: 6px;
  padding: 0px 2px;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  background: #181a1e;
  height: 40px;
`;

export const Input = styled.input`
  width: calc(100% - 64px);
  height: 32px;
  padding-left: 6px;
  border: 1px solid #d0d0d0;
  border-radius: 4px 0px 0px 4px;
  outline: none;
  background: #fff;
`;

export const Button = styled.button`
    border: none;
    width: calc(100% - (32% + 50%));
    font-size: 20px;
    line-height: 0;
    /* text-align: center; */
    color: #fff;
    background: transparent;
`;
