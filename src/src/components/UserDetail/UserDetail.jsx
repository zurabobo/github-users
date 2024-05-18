import React, { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { FaGithub } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { VscRepoForked } from "react-icons/vsc";
import { GrLocation } from "react-icons/gr";
import { GoOrganization } from "react-icons/go";
import {
  Avatar,
  Link,
  ListContainer,
  ListItem,
  Paragraph,
  Title,
  Wrapper,
  Container,
} from "./UserDetailStyles";

const UserDetail = ({ user }) => {
  const { login, avatar_url, html_url } = user;

  const [workplace, setWorkplace] = useState(0);
  const [company, setCompany] = useState(0);
  const [twitterUsername, setTwitterUsername] = useState(0);
  const [bio, setBio] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [reposCount, setReposCount] = useState(0);
  const [repositories, setRepositories] = useState([]);
  const [location, setLocation] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user.url) return;
      try {
        const res = await axios.get(user.url);
        setWorkplace(res.data.blog);
        setCompany(res.data.company);
        setTwitterUsername(res.data.twitter_username);
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

  useEffect(() => {
    const fetchRepositories = async () => {
      if (!user.repos_url) return;
      try {
        const response = await axios.get(user.repos_url);
        const sortedRepos = response.data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepositories(sortedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepositories();
  }, [user]);

  const formatUpdatedAt = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };
  console.log(repositories);

  const faGithubStyle = {
    marginRight: "4px",
    marginLeft: "12px",
  };

  const grLocationStyle = {
    fill: "#fff",
  };

  return (
    <Wrapper>
      <Container main_container="true">
        <Avatar src={avatar_url} alt={login} />
        <Container info_container="true">
          <Container title_container="true">
            <Title>{userName}</Title>
            {/* <h3>{login}</h3> */}

            <Link href={html_url} target="_blank" rel="noopener noreferrer">
              <FaGithub style={faGithubStyle} />
              {login}
            </Link>
            {bio && <Paragraph>{bio}</Paragraph>}
            {company && <Paragraph>{company}</Paragraph>}
          </Container>
          <Container detail_container="true">
            {location && (
              <Paragraph>
                <GrLocation className="grLocationStyle" style={grLocationStyle} /> {location}
              </Paragraph>
            )}
            {workplace && (
              <Paragraph>
                <GoOrganization /> {workplace}
              </Paragraph>
            )}
            <Paragraph>organizations_url: {workplace}</Paragraph>
            {twitterUsername && <Paragraph>{twitterUsername}</Paragraph>}
            <Container>
              <Paragraph>Followers: {followersCount}</Paragraph>
              <Paragraph>Following: {followingCount}</Paragraph>
              <Paragraph>Repos: {reposCount}</Paragraph>
            </Container>
          </Container>
        </Container>
      </Container>
      <ListContainer>
        {repositories.map((repo) => (
          <ListItem key={repo.id}>
            <strong>{repo.name} {!repo.provate && "Public"}</strong>
            <Paragraph>Description: {repo.description}</Paragraph>
            {repo.language && <p>Language: {repo.language}</p>}
            <Paragraph>
              <HiOutlineStar />
              {repo.stargazers_count}
            </Paragraph>
            <Paragraph>
              <VscRepoForked />
              {repo.forks_count}
            </Paragraph>
            <Paragraph>
              Updated on: {formatUpdatedAt(repo.updated_at)}
            </Paragraph>
          </ListItem>
        ))}
      </ListContainer>
    </Wrapper>
  );
};

export default UserDetail;
