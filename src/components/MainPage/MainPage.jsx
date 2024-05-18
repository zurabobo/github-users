import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "../UserDetail/UserDetail";

const MainPage = ({ onBackBtn, onChange, value }) => {
  const [user, setUser] = useState(null);
 

 

  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    // Fetch information about a default user when the component mounts
    const fetchDefaultUser = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const defaultUserLogin = "zurabobo"; // Replace with the login of the default user
        const res = await axios.get(
          `https://api.github.com/users/${defaultUserLogin}`,
          config
        );
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching default user:", error);
      }
    };

    fetchDefaultUser();
  }); // Include config as a dependency to avoid ESLint warnings

  return (
    <>
         {/* <Header>
              <Link href="/">
                <GithubLogo />
                <Title>GitHub User Search</Title>
              </Link>
              <UsersSearchForm
                onSubmit={onSubmit}
                onChange={onChange}
                value={value}
              ></UsersSearchForm>
            </Header> */}
      {user && (
        <UserDetail user={user}/>
      )}
    </>
  );
};

export default MainPage;
