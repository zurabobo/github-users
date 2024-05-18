import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.disabled ? "#5d5d5d" : "#2a2a2a")};
  cursor: ${(props) => (props.disabled ? "unset" : "pointer")};

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : .5)};
  }
`;

export const Container = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin: 0 auto;
`;
