import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link className="title" to="/">
        Mon Ptit Shop
      </Link>
    </div>
  );
};

export default Header;
