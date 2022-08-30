import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Loader from "../components/Loading";
import User from "../components/User";
import { getAllUsers, searchUsers } from "../redux/actions/userActions";

const SearchUsers = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, users } = useSelector((state) => state.allUsers);
  const search = useSelector((state) => state.searchUsers);
  // console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if (search?.loading) {
    return <Loader />;
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUsers(searchTerm));
  };
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Error>
        <Text>
          Something went wrong.Don't worry.refresh the page to try again!
        </Text>
      </Error>
    );
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          autoFocus
          placeholder="Search for friends by name "
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <FaSearch />
        </SearchButton>
      </Form>
      {users?.map((user) => (
        <User key={user._id} {...user} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchButton = styled.button`
  padding: 10px 12px;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.4s linear;
  &:hover {
    background: cyan;
  }
  border: 1px solid cyan;
  border-left: none;
`;
const Input = styled.input`
  border-top-left-radius: 5px;
  outline: none;
  border-bottom-left-radius: 5px;
  padding: 11px 10px;
  border: 1px solid cyan;
  border-right: none;
  width: 40%;
`;

const Error = styled.div`
  display: flex;
  height: 100vh;
  max-width: 400px;
  margin: 18vh auto 0;
  justify-content: center;
`;
const Text = styled.h1`
  color: cyan;
`;

export default SearchUsers;
