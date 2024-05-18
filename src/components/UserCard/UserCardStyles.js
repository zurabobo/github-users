import styled, { css } from "styled-components";
import { FaUser } from "react-icons/fa";

export const StyledFaUser = styled(FaUser)`
  path {
    fill: #c6d9ed8a;
    /* fill: none; */
    /* stroke: black; */
    /* stroke-width: 2; */
  }
`;

const hoverEffect = css`
  /* box-shadow: 0px 0px 4px 1px #fff; */
  box-shadow: 0px 1px 2px 0px #0969da;

  /* transition: box-shadow 0.1s ease-in-out; */
`;

// export const Article = styled.article`
//   border-radius: 6px;
//   display: flex;
//   position: relative;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #2a2a2a;
//   padding: 10px 15px 15px 15px;
//   border: 1px solid #535353;
//   height: 74px;
//   box-shadow: 0px 0px 2px #c2c2c2;

//   &:hover {
//     cursor: pointer;
//     ${hoverEffect}
//   }
// `;

export const Article = styled.article`
  border-radius: 6px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  /* background-color: #2a2a2a; */
  padding: 10px 15px 15px 15px;
  /* border: 2px solid #c6d9ed; */
  border: 1px solid #2a2a2a;
  /* color: red; */
  height: 74px;
  /* box-shadow: 0px 4px 6px #0969da5a; */
  box-shadow: 0px 2px 4px 0px #0969da;
  transition: box-shadow 0.05s ease-in-out;

  /* &:hover {
    cursor: pointer;
    ${hoverEffect}
  } */
`;

export const Title = styled.h2`
  text-align: start;
  font-size: 22px;
  font-weight: 600;
  margin: 0 auto;
  /* border-bottom: 1px solid #191919; */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 160px;
  padding-bottom: 4px;
  color: #2a2a2a;
  border-bottom: 1px solid #c6d9ed;
  /* border-bottom: 1px solid #c6d9ed8a; */

  @media (min-width: 356px) and (max-width: 738px) {
    max-width: 174px;
  }
`;

export const InfoText = styled.p`
  text-align: center;
  font-weight: ${(props) => (props.number ? "400" : "300")};
  font-size: ${(props) => (props.number ? "15px" : "11px")};
  margin: ${(props) => (!props.number ? "2px 0px 0px" : "0")};
  color: ${(props) => (!props.number ? "#7d7d7d" : "#2a2a2a")};
`;

// export const InfoText = styled.p.attrs((props) => ({
//   // Filter out custom props
//   number: undefined,
// }))`
//   text-align: center;
//   font-weight: ${(props) => (props.number ? "400" : "300")};
//   font-size: ${(props) => (props.number ? "15px" : "11px")};
//   margin: ${(props) => (!props.number ? "2px 0px 0px" : "0")};
//   color: ${(props) => (!props.number ? "#7d7d7d" : "#2a2a2a")};
// `;


export const Avatar = styled.img`
  width: 100px;
  border-radius: 6px;
  /* border: 1px solid #191919; */
  margin-top: -28px;
  background-color: #f6f8fa;
  border: 1px solid #2a2a2a;
  /* box-shadow: 0px 0px 6px 0px #191919; */
  /* box-shadow: 0px 4px 6px #0969da5a; */
  box-shadow: 0px 2px 4px 0px #0969da;
  transition: box-shadow 0.05s ease-in-out;
  ${Article}:hover & {
    ${hoverEffect}
  }
  /* filter: drop-shadow(0px 0px 2px #c2c2c2); */
`;

export const AvatarContainer = styled.div`
  /* position: absolute; */
  /* top: 25%;
  left: 50%; */
  border-radius: 6px;
  width: 100px;
  height: 100px;
  background-color: #2a2a2a;
  /* transform: translate(-50%, 0); */
  border: 4px solid #fff;
  outline: 1px solid #d0d0d0;
`;

export const InfoContainer = styled.div`
  width: 70%;
  padding: 0 20px 0 0;
  /* border-bottom: 1px solid #2a2a2a; */
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
