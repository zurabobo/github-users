import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Wrapper = styled.div`
  /* margin: 100px 0 50px; */
  margin: 120px 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 524px) {
    flex-direction: row;
    /* margin: 120px 0 50px; */
  }

  @media (min-width: 624px) {
    margin: 100px 0 50px;
    /* margin: 120px 0 50px; */
  }
`;

export const Body = styled.div`
  padding: 20px 5% 40px;

  @media (min-width: 889px) and (max-width: 1024px) {
    padding: 30px 13% 50px;
  }

  @media (min-width: 1025px) and (max-width: 1470px) {
    padding: 30px 8% 50px;
  }


  /* @media (min-width: 1160px) {
    padding: 30px 12% 50px;
  } */
`;

export const GithubLogo = styled(FaGithub)`
  font-size: 34px;
  color: #2a2a2a;
`;

export const Header = styled.div`
  // max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f8fa;
  border-bottom: 1px solid;
  box-shadow: 0 0 2px;
  padding: 10px 6%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  @media (max-width: 624px) {
    flex-direction: column;
  }

  @media (min-width: 889px) {
    padding: 20px 8%;
  }

  /* @media (max-width: 1160px) {
    padding: 20px 12%;
  } */
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-left: 15px;
  color: #2a2a2a;
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

// export const ListContainer = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   padding: 0;
//   place-items: center;
//   /* grid-column-gap: 4px; */
//   gap: 10px 10px;
//   list-style: none;
// `;

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

export const Paragraph = styled.p`
  /* margin: 0 auto 10px 0; */
  color: #2a2a2a;
  margin: 0;

  @media (max-width: 524px) {
    margin: 0 auto 10px 0;
  }
`;

export const Span = styled.span`
  color: #0969da;
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
