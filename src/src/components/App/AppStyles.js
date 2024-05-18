import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Wrapper = styled.div`
  /* padding: 30px 60px; */
`;

export const Body = styled.div`
  padding: 122px 10% 50px;
`;


export const GithubLogo = styled(FaGithub)`
  font-size: 34px;
  color: #181A1E;
`;

export const Header = styled.div`
  // max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f8fa;
  border-bottom: 1px solid;
  box-shadow: 0 0 2px;
  padding: 20px 10%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-left: 15px;
  color: #181a1e;
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
`;

export const Select = styled.select`
  border: 1px solid red;
`;

export const Option = styled.option`
  border: 1px solid red;
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  /* grid-column-gap: 4px; */
  gap: 10px 10px;
  list-style: none;
`;

export const ListItem = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 30%;
  border-radius: 50%;
`;

// const Page = styled.div`
//   font-family: "Google Sans", Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-font-smoothing: antialiased;
//   -webkit-text-size-adjust: 100%;
//   -ms-text-size-adjust: 100%;
//   -moz-text-size-adjust: 100%;
//   text-rendering: optimizeLegibility;
// `;
