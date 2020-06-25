import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleSearchChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleSearchChange}
    />
  );
};
