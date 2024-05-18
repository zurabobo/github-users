import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import {
  Article,
  Title,
  InfoText,
  DetailContainer,
  Avatar,
  InfoContainer,
  DetailsContainer,
  StyledFaUser,
} from "./UserCardStyles";

const UserCard = ({ user, onUserClick }) => {
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [reposCount, setReposCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  //   const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user.url) return;
      setIsLoading(true);
      try {
        
        const res = await axios.get(user.url);
        setFollowersCount(res.data.followers);
        setFollowingCount(res.data.following);
        setReposCount(res.data.public_repos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, [user.url]);

  function handleCardClick() {
    onUserClick(user);
  }

  const faUserStyle = {
    marginRight: "10px",
    // border: "1px solid #c6d9ed",
    // borderRadius: "50%",
    // padding: "3px",
    // backgroundColor: "#c6d9ed",
  };

  return (
    <Article onClick={handleCardClick} is_hovered={isHovered} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {/* <InfoContainer>
        <AvatarContainer> */}

      {/* </AvatarContainer>
      </InfoContainer> */}
      <InfoContainer>
        <Title><StyledFaUser style={faUserStyle} size={14}/>{user.login}</Title>
        <DetailsContainer>
          <DetailContainer>
            {isLoading ? (
              <Spinner />
            ) : (
              <InfoText number="true">{followersCount}</InfoText>
            )}
            <InfoText>Followers</InfoText>
          </DetailContainer>

          <DetailContainer>
            {isLoading ? (
              <Spinner />
            ) : (
              <InfoText number="true">{followingCount}</InfoText>
            )}
            <InfoText>Following</InfoText>
          </DetailContainer>

          <DetailContainer>
            {isLoading ? (
              <Spinner />
            ) : (
              <InfoText number="true">{reposCount}</InfoText>
            )}
            <InfoText>Repos</InfoText>
          </DetailContainer>
        </DetailsContainer>
      </InfoContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
      )}
      {/* <Title>{user.login}</Title>
      <InfoContainer primary="true">
        <DetailContainer>
          <InfoText number="true">{followersCount}</InfoText>
          <InfoText>Followers</InfoText>
        </DetailContainer>

        <DetailContainer>
          <InfoText number="true">{followingCount}</InfoText>
          <InfoText>Following</InfoText>
        </DetailContainer>

        <DetailContainer>
          <InfoText number="true">{reposCount}</InfoText>
          <InfoText>Repos</InfoText>
        </DetailContainer>
      </InfoContainer> */}
    </Article>
  );
};

export default UserCard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Spinner from "../Spinner/Spinner";
// import {
//   Article,
//   Title,
//   InfoText,
//   DetailContainer,
//   Avatar,
//   InfoContainer,
//   DetailsContainer,
// } from "./UserCardStyles";

// const UserCard = ({ user }) => {
//   const [followersCount, setFollowersCount] = useState(0);
//   const [followingCount, setFollowingCount] = useState(0);
//   const [reposCount, setReposCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       if (!user.url) return;
//       setIsLoading(true);
//       try {
//         const res = await axios.get(user.url);
//         setFollowersCount(res.data.followers);
//         setFollowingCount(res.data.following);
//         setReposCount(res.data.public_repos);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchUserProfile();
//   }, [user.url]);

//   return (
//     <Link to={`/user/${user.login}`}>
//       <Article>
//         <InfoContainer primary="true">
//           <Title>{user.login}</Title>
//           <DetailsContainer>
//             <DetailContainer>
//               {isLoading ? <Spinner /> : <InfoText number="true">{followersCount}</InfoText>}
//               <InfoText>Followers</InfoText>
//             </DetailContainer>

//             <DetailContainer>
//               {isLoading ? <Spinner /> : <InfoText number="true">{followingCount}</InfoText>}
//               <InfoText>Following</InfoText>
//             </DetailContainer>

//             <DetailContainer>
//               {isLoading ? <Spinner /> : <InfoText number="true">{reposCount}</InfoText>}
//               <InfoText>Repos</InfoText>
//             </DetailContainer>
//           </DetailsContainer>
//         </InfoContainer>
//         {isLoading ? <Spinner /> : <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />}
//       </Article>
//     </Link>
//   );
// };

// export default UserCard;
