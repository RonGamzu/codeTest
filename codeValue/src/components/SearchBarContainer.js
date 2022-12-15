import React from "react";
import Input from "../commons/Input";

const SearchBarContainer = ({
  setCurrentProductId,
  searchTerm,
  setSearchTerm,
  setSortBy,
}) => {
  return (
    <div className="upperBar">
      <button
        className="SearchButton"
        onClick={() => setCurrentProductId(null)}
      >
        + Add
      </button>
      <Input
        className="SearchBar"
        type="search"
        placeholder="Search products"
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <label foכr="sorted">Sort by</label>
      <select
        className="sortBy"
        onChange={(e) => setSortBy(e.target.value)}
        name="sortBy"
      >
        <option value="creationDate">Recently added</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default SearchBarContainer;
