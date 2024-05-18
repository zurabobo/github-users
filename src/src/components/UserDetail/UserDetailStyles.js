import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
justify-content: space-between;
flex-direction: column;
background-color: #fff; */
  color: #2a2a2a;
  /* background-color: #fff; */
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.title_container ? "unset" : "flex-start")};
  border-bottom: ${(props) => (props.info_container ? "1px solid #2a2a2a" : "0")};
  width: 100%;
  margin: ${(props) => (props.main_container ? "0 auto" : "0")};
  /* background-color: #2a2a2a; */
  /* padding: 0 0 14px; */

  flex-direction: ${(props) => (props.info_container || props.detail_container ? "column" : "unset")};
  /* border-top: 1px solid #2a2a2a; */
  /* margin: 0 auto; */
  padding: ${(props) => (props.info_container ? "0 0 10px 20px" : "unset")};;
  align-items: ${(props) => (props.title_container ? "center" : "unset")};
 
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  /* margin: 0 auto; */
  /* border-bottom: 1px solid #191919; */
  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 160px; */
  /* padding-bottom: 4px; */
  color: #2a2a2a;
  margin: 0;
`;

export const Link = styled.a`
color: #0969da;
text-decoration: none;
font-size: 18px;
&:hover {
  opacity: .7;
}
`;

export const Avatar = styled.img`
  border-radius: 20px 0;
  height: 230px;
`;

export const Paragraph = styled.p``;

export const ListContainer = styled.ul``;

export const ListItem = styled.li``;
