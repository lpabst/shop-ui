import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import "./searchBar.scss";

function SearchBar() {
  return (
    <div className={`flexRow searchBar`}>
      <input className="searchInput" placeholder="Search" />
      <img className={`icon searchIcon`} src={searchIcon} alt="search" />
    </div>
  );
}

export default SearchBar;
