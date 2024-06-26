import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "../UserDetail/UserDetail";
import { Header, Link, Title, GithubLogo } from "../App/AppStyles";
import UsersSearchForm from "../UsersSearchForm/UsersSearchForm";

const MainPage = ({ onSubmit, onChange, value }) => {
  const [user, setUser] = useState(null);

  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    // Fetch information about a default user when the component mounts
    const fetchDefaultUser = async () => {
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
  }, [config]); // Include config as a dependency to avoid ESLint warnings

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
        <UserDetail user={user} />
      )}
    </>
  );
};

export default MainPage;
