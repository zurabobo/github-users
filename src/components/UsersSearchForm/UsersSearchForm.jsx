import React from "react";
import {
  Form,
  Input,
  Button,
  SearchIcon,
  StyledIoCloseOutline,
} from "./UsersSearchFormStyles";

const UsersSearchForm = ({ onSubmit, onChange, value, onClear }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter GitHub username"
      />
      {value !== "" && (
        <Button>
          <StyledIoCloseOutline onClick={onClear} />
        </Button>
      )}
      <Button type="submit" submit_button="true">
        <SearchIcon />
      </Button>
    </Form>
  );
};
export default UsersSearchForm;
