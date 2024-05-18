// import styled from "styled-components";

// export const ListContainer = styled.ul`
//   display: grid;
//   justify-content: center;
//   /* grid-template-columns: repeat(4, 1fr); */
//   /* grid-template-columns: repeat(auto-fit, minmax(215px, 215px)); */
//   grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));

//   padding: 0;
//   /* grid-column-gap: 4px; */
//   gap: 10px 10px;
//   list-style: none;
// `;

// export const ListItem = styled.li`
//   /* display: flex;
//   flex-direction: column;
//   align-items: center; */
// `;

import styled from "styled-components";

export const ListItem = styled.li`
  /* width: 300px;
align-self: center; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  transition: all ease-in-out 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

export const ListContainer = styled.ul`
  display: grid;
  justify-content: center;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-columns: repeat(auto-fit, minmax(215px, 215px)); */
  grid-template-columns: repeat(auto-fill, minmax(315px, 315px));
  padding: 0;
  /* place-items: center; */
  /* grid-column-gap: 4px; */
  gap: 35px 20px;
  list-style: none;
  margin: 40px auto 0;
  /* 
  @media (min-width: 1025px) and (max-width: 1326px) {
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  } */


  &:hover > ${ListItem}:not(:hover) {
    filter: blur(1px);
    transform: scale(0.9, 0.9);
  }

  @media (max-width: 738px) {
    grid-template-columns: 330px;
  }

  @media (max-width: 356px) {
    grid-template-columns: 300px;
  }
`;
