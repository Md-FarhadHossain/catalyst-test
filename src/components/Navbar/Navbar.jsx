import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="bg-gray-200">
        <ul className="flex items-center">
          <li>
            <Link to="/">Pic Some</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
