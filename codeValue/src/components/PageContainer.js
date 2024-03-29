import React from "react";
import SearchBarContainer from "./SearchBarContainer";

const PageContainer = ({
  setCurrentProductId,
  searchTerm,
  setSearchTerm,
  setSortBy,
  children,
}) => {
  return (
    <div className="pageHeadingContainer">
      <div className="pageHeading">
        <h1>My Store</h1>
      </div>
      <SearchBarContainer
        setCurrentProductId={setCurrentProductId}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSortBy={setSortBy}
      />
      <main>{children}</main>
    </div>
  );
};

export default PageContainer;
