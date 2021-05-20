import React from "react";

function NavBar({ title }) {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-git' />
        {title}
      </h1>
    </nav>
  );
}

export default NavBar;
