import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-200">
      <header className="py-8 container mx-auto ">
        <ul className="flex items-center text-xl gap-6 justify-center font-semibold">
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
