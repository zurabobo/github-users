import React from "react";
import { Select, Option, Wrapper } from "./RepositorySortSelectStyles";

const RepositorySortSelect = ({ onChange, value }) => {
  return (
    <Wrapper>
    <Select onChange={onChange} value={value}>
      <Option value="default" disabled>Sort by repositories</Option>
      <Option value="asc">Ascending</Option>
      <Option value="desc">Descending</Option>
    </Select>
    </Wrapper>
  );
};

export default RepositorySortSelect;
