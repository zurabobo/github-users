import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  color: #2a2a2a;
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: ${(props) =>
    props.title_container ? "unset" : "flex-start"};
  border-bottom: ${(props) =>
    props.info_container ? "1px solid #2a2a2a" : "none"};
  width: 100%;
  margin: ${(props) => (props.main_container ? "100px auto 30px" : "0")};
  flex-direction: ${(props) =>
    props.list_container || props.detail_container || props.bio_container
      ? "column"
      : "unset"};
  padding: ${(props) => (props.info_container ? "0 0 10px 20px" : "0")};
  align-items: ${(props) => (props.title_container ? "center" : "unset")};

  @media (max-width: 660px) {
    flex-direction: ${(props) => props.main_container && "column"};
    padding-left: ${(props) => props.info_container && "0"};
    justify-content: ${(props) => props.title_container && "center"};
    justify-content: ${(props) => props.followers_container && "space-between"};
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: #2a2a2a;
  margin: 0;
`;

export const RepoTitle = styled.h3`
  color: #0969da;
  margin: 0;
`;

export const Link = styled.a`
  color: #0969da;
  text-decoration: none;
  margin: ${(props) => (props.github ? "0" : "6px 0")};
  display: ${(props) => (props.repo_url ? "unset" : "inline-flex")};
`;

export const Avatar = styled.img`
  border-radius: 20px 0;
  height: 230px;

  @media (max-width: 660px) {
    border-radius: 50%;
    height: 160px;
    width: 160px;
    align-self: center;
    margin-bottom: 10px;
  }
`;

export const Paragraph = styled.p`
  display: ${(props) => (!props.info ? "inline-flex" : "")};
  font-size: ${(props) => (props.info ? "20px" : "16px")};
  font-weight: ${(props) => (props.info ? "bold" : "normal")};
  margin-top: ${(props) => (props.count || props.updated_at ? "0" : "6px")};
  margin-bottom: 0;
  margin-left: ${(props) => (props.updated_at ? "auto" : "0")};
  margin-right: ${(props) => (props.count ? "20px" : "0")};
  height: ${(props) => (props.count ? "16px" : "unset")};
`;

export const ListItem = styled.li`
  display: ${(props) => (props.info ? "flex" : "unset")};
  flex-direction: ${(props) => (props.info ? "column" : "unset")};
  border-bottom: ${(props) =>
    props.repositories ? "1px solid #2a2a2a" : "none"};
  padding: ${(props) => (props.repositories ? "50px 0 15px" : "0")};
  margin-right: ${(props) => (props.info ? "30px" : "0")};
  margin-bottom: 14px;
  text-align: ${(props) => (props.info ? "center" : "start")};
`;

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Span = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
  box-shadow: 0px 1px 2px;
`;

export const BackButton = styled.button`

  position: fixed;
  top: 90px;
  right: 8%;
  background-color: #0969da17;
  border: none;
  border-radius: 0 0 4px 4px;
  outline: none;
  box-shadow: 0px 0px 2px #2a2a2a;
  padding: 5px 12px 3px;
  backdrop-filter: blur(4px);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  @media (max-width: 889px) {
    top: 70px;
    right: 6%;
    backdrop-filter: blur(2px);
  }

  @media (max-width: 624px) {
    top: 110px;
    right: 6%;
  }

  &:hover {
    background-color: #0969da21;
  }
`;
