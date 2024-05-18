import styled from "styled-components";

export const Button = styled.button`
  /* border: none; */
  background-color: transparent;
  color: ${(props) => (props.disabled ? "#8c959f" : "#0969da")};
  cursor: ${(props) => (props.disabled ? "unset" : "pointer")};
  user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color .2s cubic-bezier(0.3, 0, 0.5, 1);
    padding: 5px 10px;

  &:hover {
    /* opacity: ${(props) => (props.disabled ? 1 : .5)}; */
    border-color: ${(props) => (props.disabled ? "transparent" : "#d0d7de")};

    /* border-color: #d0d7de; */
   
  }
`;

export const Container = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin: 20px auto 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
