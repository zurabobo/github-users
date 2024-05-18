import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  from {
    background-position: 100% 100%;
  }
  to {
    background-position: 0 0;
  }
`;

export const StyledAvatar = styled.div`
  height: 100px;
  min-width: 100px;
  margin-top: -28px;
  border-radius: 6px;
  border: 1px solid #535353;
  background-image: linear-gradient( 90deg, #2a2a2a 0%, #2a2a2a 40%, #717171 50%, #717171 55%, #2a2a2a 65%, #2a2a2a 100% );
  background-size: 400%;
  animation: ${shimmer} 1500ms infinite;
`;

export const Info = styled.div`
height: 20px;
width: ${(props) => (props.title ? "100%" : "44px")};
background-image: linear-gradient( 90deg, #2a2a2a 0%, #2a2a2a 40%, #717171 50%, #717171 55%, #2a2a2a 65%, #2a2a2a 100% );
background-size: 400%;
animation: ${shimmer} 1500ms infinite;
`



// export const Container = styled.div`
// display: grid;
// justify-content: center;
// grid-template-columns: repeat(auto-fill, minmax(315px, 315px));
// padding: 0;
// gap: 35px 20px;
// margin: 100px auto;
// `

