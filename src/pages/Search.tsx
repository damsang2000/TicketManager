import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="containerSearch">
      <Input placeholder="Tìm bằng số vé" className="searchTicket" />
      <Link to="/">
        <i className="bx bx-search searchIcon1"></i>
      </Link>
    </div>
  );
};

export default Search;
