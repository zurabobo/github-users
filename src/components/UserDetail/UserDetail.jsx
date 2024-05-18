/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { FaGithub } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { VscRepoForked } from "react-icons/vsc";
import { GrLocation } from "react-icons/gr";
import { GoOrganization } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";
import {
  Avatar,
  Link,
  ListContainer,
  ListItem,
  Paragraph,
  Title,
  Wrapper,
  RepoTitle,
  Container,
  LanguageContainer,
  Span,
  BackButton,
} from "./UserDetailStyles";
import { useLocation } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const UserDetail = ({ user, onBackBtn }) => {
  const { login, avatar_url, html_url } = user;

  const [workplace, setWorkplace] = useState(0);
  const [company, setCompany] = useState(0);
  const [bio, setBio] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [reposCount, setReposCount] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [location, setLocation] = useState(null);
  const [userName, setUserName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(20); // Choose the number of items per page
  const [totalRepositories, setTotalRepositories] = useState(0);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user.url) return;
      try {
        const res = await axios.get(user.url);
        setWorkplace(res.data.blog);
        setCompany(res.data.company);
        setBio(res.data.bio);
        setFollowersCount(res.data.followers);
        setFollowingCount(res.data.following);
        setReposCount(res.data.public_repos);
        setLocation(res.data.location);
        setUserName(res.data.name);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [user.url]);
  
  const fetchRepositories = async (page) => {
    if (!user.repos_url) return;
    try {
      const response = await axios.get(
        `${user.repos_url}?per_page=${itemsPerPage}&page=${page}`
      );
      setTotalRepositories(response.headers["itemsPerPage"]); // Set the total number of repositories
      const repositories = response.data;
      const sortedRepos = repositories.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
      );
      setRepositories(sortedRepos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepositories(currentPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.url, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // useEffect(() => {
  //   const fetchRepositories = async () => {
  //     try {
  //       const response = await axios.get(user.repos_url);
  //       setRepositories(response.data);
  //     } catch (error) {
  //       console.error('Error fetching repositories:', error);
  //     }
  //   };
  //   fetchRepositories();
  // }, [user]);

  // useEffect(() => {
  //   const fetchRepositories = async () => {
  //     if (!user.repos_url) return;
  //     try {
  //       const response = await axios.get(user.repos_url);
  //       const sortedRepos = response.data.sort(
  //         (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  //       );
  //       setRepositories(sortedRepos);
  //     } catch (error) {
  //       console.error("Error fetching repositories:", error);
  //     }
  //   };
  //   fetchRepositories();
  // }, [user]);

  const formatUpdatedAt = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };

  const faGithubStyle = {
    marginRight: "4px",
    marginLeft: "12px",
  };

  const AiOutlineLinkStyle = {
    fill: "#2a2a2a",
  };

  const languageColors = {
    Java: "#b1721a",
    JavaScript: "#f1e05a",
    Python: "#3572a5",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Kotlin: "#a97bff",
    Assembly: "#6f4d13",
    TeX: "#3d6117",
    Shell: "#89e051",
    HTML: "#e34c26",
    AutoHotkey: "#6694b9",
    Perl: "#2098c4",
    Makefile: "#427819",
    Roff: "#eddebe",
    Puppet: "#302b6d",
    Dockerfile: "#384d55",
    TypeScript: "#3178c6",
    Rust: "#dfa684",
    "Objective-C": "#438eff",
    "Jupyter Notebook": "#db5c09",
    "Vim Script": "#299f4c",
    Go: "#26add8",
    Ruby: "#701516",
    CSS: "#563d7c",
    XSLT: "##EB8CEB",
    PHP: "##4F5D95",
  };
  const locationa = useLocation();

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!user.repos_url) return;
      try {
        let allRepositories = [];
        let page = 1;
        while (true) {
          const response = await axios.get(
            `${user.repos_url}?per_page=${itemsPerPage}&page=${page}`
          );
          const repositories = response.data;
          if (repositories.length === 0) break;
          allRepositories = [...allRepositories, ...repositories];
        }
        const sortedRepos = allRepositories.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepositories(sortedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepositories();
  }, [user]);

  return (
    <Wrapper>
      {locationa.pathname !== "/" && (
        <BackButton onClick={onBackBtn}>Go Back</BackButton>
      )}
      <ListContainer main_container="true">
        <Avatar src={avatar_url} alt={login} />
        <ListContainer info_container="true" bio_container="true">
          <ListContainer title_container="true">
            <Title>{userName}</Title>
            {/* <h3>{login}</h3> */}

            <Link
              github="true"
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={faGithubStyle} />
              {login}
            </Link>
          </ListContainer>
          <ListContainer detail_container="true">
            {bio && <Paragraph>{bio}</Paragraph>}
            {company && (
              <Paragraph>
                <GoOrganization /> {company}
              </Paragraph>
            )}
            {location && (
              <Paragraph>
                <GrLocation /> {location}
              </Paragraph>
            )}
            {workplace && (
              <Link href={workplace} target="_blank" rel="noopener noreferrer">
                <AiOutlineLink style={AiOutlineLinkStyle} /> {workplace}
              </Link>
            )}
            {/* <p>
        Github URL:{" "}
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {html_url}
        </a>
      </p> */}
            {/* <Paragraph>organizations_url: {workplace}</Paragraph> */}
            {/* {twitterUsername && (
              <Paragraph>
                {" "}
                <FaTwitter /> {twitterUsername}
              </Paragraph>
            )} */}
            <ListContainer followers_container="true">
              <ListItem info="true">
                <Paragraph info="true">{followersCount}</Paragraph>
                <Paragraph>Followers</Paragraph>
              </ListItem>
              <ListItem info="true">
                <Paragraph info="true">{followingCount}</Paragraph>
                <Paragraph>Following</Paragraph>
              </ListItem>
              <ListItem info="true">
                <Paragraph info="true">{reposCount}</Paragraph>
                <Paragraph>Repos</Paragraph>
              </ListItem>
            </ListContainer>
          </ListContainer>
        </ListContainer>
      </ListContainer>
      <ListContainer list_container="true">
        {repositories.map((repo) => (
          <ListItem key={repo.id} repositories="true">
            <Link
              repo_url="true"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RepoTitle>{repo.name}</RepoTitle>
            </Link>{" "}
            <Paragraph>{repo.description}</Paragraph>
            <Container>
              {repo.language && (
                <LanguageContainer>
                  <Span
                    style={{
                      backgroundColor:
                        languageColors[repo.language] || "#2a2a2a",
                    }}
                  ></Span>
                  <Paragraph count="true">{repo.language}</Paragraph>
                </LanguageContainer>
              )}
              <Paragraph count="true">
                <HiOutlineStar />
                {repo.stargazers_count}
              </Paragraph>
              <Paragraph count="true">
                <VscRepoForked />
                {repo.forks_count}
              </Paragraph>
              <Paragraph updated_at="true">
                Last push {formatUpdatedAt(repo.updated_at)}
              </Paragraph>
            </Container>
          </ListItem>
        ))}
      </ListContainer>
      <Pagination
        onPrevPageClick={handlePrevPage}
        onNextPageClick={handleNextPage}
        prevBtnDisabled={currentPage === 1}
        nextBtnDisabled={
          currentPage >= Math.ceil(totalRepositories / itemsPerPage)
        }
      />
    </Wrapper>
  );
};

export default UserDetail;
