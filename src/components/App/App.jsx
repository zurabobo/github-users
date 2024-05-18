import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "../UserDetail/UserDetail";
import {
  Wrapper,
  Title,
  Header,
  Link,
  GithubLogo,
  Body,
  Paragraph,
  Span,
} from "./AppStyles";
import Pagination from "../Pagination/Pagination";
import UsersList from "../UsersList/UsersList";
import UsersSearchForm from "../UsersSearchForm/UsersSearchForm";
import RepositorySortSelect from "../RepositorySortSelect/RepositorySortSelect";
import Preloader from "../Preloader/Preloader";
import MainPage from "../MainPage/MainPage";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";

const App = () => {
  const [query, setQuery] = useState("");
  const [lastEnteredQuery, setLastEnteredQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const ITEMS_PER_PAGE = 30;

  const token = process.env.REACT_APP_GITHUB_TOKEN;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const navigate = useNavigate();
  const { user_login } = useParams();

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await axios.get("https://api.github.com/search/users", {
        params: {
          q: query.trim(),
          sort: sortBy,
          per_page: ITEMS_PER_PAGE,
          page: currentPage,
        },
      });
      setUsers(res.data.items);
      setTotalResults(res.data.total_count);
      setSortBy("default");
      navigate(`/users`);
      setLastEnteredQuery(query);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    navigate(`/users/${user.login}`);
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    handleSearch();
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSortChange = async (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);

    const usersWithDetails = await Promise.all(
      users.map(async (user) => {
        const res = await axios.get(user.url, config);
        return {
          ...user,
          public_repos: res.data.public_repos,
        };
      })
    );
    if (newSortBy === "asc") {
      setUsers(
        usersWithDetails.sort((a, b) => a.public_repos - b.public_repos)
      );
    } else if (newSortBy === "desc") {
      setUsers(
        usersWithDetails.sort((a, b) => b.public_repos - a.public_repos)
      );
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInputClear = () => {
    setQuery("");
  };

  const handleGoBack = () => {
    // Navigate back to the search results page with the search query
    // navigate(`/users/`);
    navigate(-1);
  };

  return (
    <>
      <Header>
        <Link href="/">
          <GithubLogo />
          <Title>GitHub User Search</Title>
        </Link>
        <UsersSearchForm
          onSubmit={handleSubmit}
          onChange={handleInputChange}
          value={query}
          onClear={handleInputClear}
        ></UsersSearchForm>
      </Header>

      <Routes>
        <Route
          path="/"
          element={
            <Body>
              <MainPage user={selectedUser} />
            </Body>
          }
        />

        <Route
          path="/users"
          element={
            <Body>
              {users.length > 0 ? (
                <>
                  <Wrapper>
                    <Paragraph>
                      Found <Span>{totalResults}</Span>{" "}
                      {totalResults === 1 ? "result" : "results"} for{" "}
                      <Span>{lastEnteredQuery}</Span>
                    </Paragraph>
                    <RepositorySortSelect
                      onChange={handleSortChange}
                      value={sortBy}
                    ></RepositorySortSelect>
                  </Wrapper>

                  <UsersList
                    users={users}
                    onUserClick={handleUserClick}
                  ></UsersList>

                  <Pagination
                    onNextPageClick={handleNextPage}
                    onPrevPageClick={handlePrevPage}
                    prevBtnDisabled={currentPage === 1}
                    nextBtnDisabled={
                      currentPage >= Math.ceil(totalResults / ITEMS_PER_PAGE)
                    }
                  ></Pagination>
                </>
              ) : (
                <Wrapper>
                  <Paragraph>
                    Found <Span>0</Span> result for{" "}
                    <Span>{lastEnteredQuery}</Span>
                  </Paragraph>
                </Wrapper>
              )}
            </Body>
          }
        />

        <Route
          path="/users/:user_login"
          element={
            <Body>
              {users.length > 0 && <UserDetail user={selectedUser} onBackBtn={handleGoBack}/>}
            </Body>
          }
        />
      </Routes>
    </>
  );
};

export default App;
