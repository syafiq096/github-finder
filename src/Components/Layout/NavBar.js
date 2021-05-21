import React from "react";
import { Link } from "react-router-dom";

function NavBar({ title }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-git' />
        {title}
      </h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

NavBar.defaultProps = {
  title: "title",
};

export default NavBar;
