import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const SearchIcon = styled(BiSearch)`
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  /* position: relative; */
  display: flex;
  border-radius: 6px;
  padding: 0px 2px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #2a2a2a;
  height: 40px;
  @media (min-width: 624px) {
    width: 50%;
  }
`;

export const Input = styled.input`
  width: calc(100% - 64px);
  height: 34px;
  border: 1px solid #fff;
  padding: 0 0 0 6px;
  border-radius: 4px 0px 0px 4px;
  outline: none;
  background: #fff;

  &:focus {
    outline: none;
  }
`;

export const StyledIoCloseOutline = styled(IoCloseOutline)`
  color: #2a2a2a;
`;

export const Button = styled.button`
  border: none;
  width: ${(props) => (props.submit_button ? "18%" : "40px")};
  height: ${(props) => (props.submit_button ? "unset" : "36px")};
  font-size: 20px;
  line-height: 0;
  color: #fff;
  background: ${(props) => (props.submit_button ? "transparent" : "#fff")};
  cursor: pointer;
  /* padding-right: 20px; */

`;
