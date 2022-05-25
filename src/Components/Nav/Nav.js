import React from "react";
import "./Nav.css";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

function Nav() {
  return (
    <div className="nav">
      {/* nav lcon and logos */}
      <div className="nav_logo">INDI</div>

      <SearchOutlinedIcon className="nav_icon" />

      <LocalMoviesOutlinedIcon className="nav_icon" />

      <StarOutlineIcon className="nav_icon" />

      <PersonOutlinedIcon className="nav_icon" />
    </div>
  );
}

export default Nav;
