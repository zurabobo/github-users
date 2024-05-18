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

export const ListContainer = styled.ul`
  display: grid;
  justify-content: center;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-columns: repeat(auto-fit, minmax(215px, 215px)); */
  grid-template-columns: repeat(auto-fill, minmax(315px, 315px));
  padding: 0;
  /* grid-column-gap: 4px; */
  gap: 35px 20px;
  list-style: none;
  margin: 40px auto;
`;

export const ListItem = styled.li`

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
