import React from "react";
import { Select, Option } from "./RepositorySortSelectStyles";

const RepositorySortSelect = ({ onChange, value }) => {
  return (
    <>
    <Select onChange={onChange} value={value}>
      <Option value="default" disabled>Sort by repositories</Option>
      <Option value="asc">Ascending</Option>
      <Option value="desc">Descending</Option>
    </Select>
    </>
  );
};

export default RepositorySortSelect;
