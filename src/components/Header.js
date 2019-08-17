import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import logo from "./../../public/images/logo.svg";

const Header = () => (
  <header className="header">
    <div className="" />
    <Link className="header__title" to="/">
      <SVG className="header__logo" src={logo} />
    </Link>
  </header>
);

export default Header;
