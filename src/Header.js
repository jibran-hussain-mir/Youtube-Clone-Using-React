import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState(" ");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            alt="youtube logo"
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
        ></input>
        <Link className="header__link" to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsNoneIcon className="header__icon" />
        <Avatar
          className="header__icon"
          alt="Jibran Hussain Mir"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEDt-1o9wX9Ig/profile-displayphoto-shrink_400_400/0/1658643654980?e=1676505600&v=beta&t=q_hXHIZjzhlmfttzoN712QYKWtUmnzRfdXQ1hMnYzCY"
        />
      </div>
    </div>
  );
}

export default Header;
