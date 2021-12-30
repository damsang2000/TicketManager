import React from "react";
import { Link } from "react-router-dom";
import logo from "../layout/logo.png";
import { useState } from "react";
const Sidebar = () => {
  const [Value, setValue] = useState(false);
  const [color, setColor] = useState(0);
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <button
        className="btn"
        onClick={() => setColor(1)}
        style={color === 1 ? { backgroundColor: "#ffb800" } : {}}
      >
        <i
          className="bx bx-home-alt"
          style={color === 1 ? { color: "white", fontWeight: "bold" } : {}}
        ></i>
        <Link
          to="/"
          style={color === 1 ? { color: "white", fontWeight: "bold" } : {}}
        >
          Trang chủ
        </Link>
      </button>
      <button
        className="btn"
        onClick={() => setColor(2)}
        style={color === 2 ? { backgroundColor: "#ffb800" } : {}}
      >
        <i
          className="bx bxs-coupon"
          style={color === 2 ? { color: "white", fontWeight: "bold" } : {}}
        ></i>
        <Link
          to="/ticketmanager"
          style={color === 2 ? { color: "white", fontWeight: "bold" } : {}}
        >
          Quản lý vé
        </Link>
      </button>
      <button
        className="btn"
        onClick={() => setColor(3)}
        style={color === 3 ? { backgroundColor: "#ffb800" } : {}}
      >
        <i
          className="bx bx-receipt"
          style={color === 3 ? { color: "white", fontWeight: "bold" } : {}}
        ></i>
        <Link
          to="/invoketicket"
          style={color === 3 ? { color: "white", fontWeight: "bold" } : {}}
        >
          Đối soát vé
        </Link>
      </button>
      <button className="btn btn-cog" onClick={() => setValue(!Value)}>
        <i
          className="bx bx-cog cog"
          style={color > 3 ? { color: "white", fontWeight: "bold" } : {}}
        ></i>
        <Link
          to="/setting"
          onClick={() => setColor(4)}
          style={
            color > 3
              ? {
                  backgroundColor: "#ffb800",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  color: "white",
                }
              : {}
          }
        >
          Cài đặt
        </Link>
      </button>
      {Value && (
        <div className="option">
          <Link to="/">Gói dịch vụ</Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
