import React from "react";
import { Form, Input, Button, SearchIcon } from "./UsersSearchFormStyles";

const UsersSearchForm = ({ onSubmit, onChange, value }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter GitHub username"
      />
      <Button type="submit">
      <SearchIcon />
      </Button>
    </Form>
  );
};
export default UsersSearchForm;
