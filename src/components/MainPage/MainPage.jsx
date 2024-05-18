import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "../UserDetail/UserDetail";

const MainPage = () => {
  const [user, setUser] = useState(null);

  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const fetchDefaultUser = async () => {
      try {
        const defaultUserLogin = "zurabobo";
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
  });

  return <>{user && <UserDetail user={user} />}</>;
};

export default MainPage;
