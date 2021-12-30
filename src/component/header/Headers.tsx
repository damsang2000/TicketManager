import React, { Fragment } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import avartar from "./image/chỉ mục.jpg";
const Headers = () => {
  return (
    <Fragment>
      <div>
        <Input placeholder="Search" className="searchInput" />
        <Link to="/">
          <i className="bx bx-search searchIcon"></i>
        </Link>
      </div>
      <div className="header_right">
        <Link to="/">
          <i className="bx bx-envelope"></i>
        </Link>
        <Link to="/">
          <i className="bx bx-bell"></i>
        </Link>
        <img src={avartar} alt="" className="avartar" />
      </div>
    </Fragment>
  );
};

export default Headers;
