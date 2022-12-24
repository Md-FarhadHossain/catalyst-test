import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline,IoCartSharp } from "react-icons/io5";
import { useContext } from "react";
import { PhotoProvider } from "../../context/PhotoContext";


const Navbar = () => {
  const {cartItems} = useContext(PhotoProvider)
  return (
    <div className="bg-slate-200">
      <header className="py-8 container mx-auto ">
        <ul className="flex items-center text-xl gap-6 justify-center font-semibold">
          <li>
            <Link to="/">Pic Some</Link>
          </li>
          <li>
            <Link to="/cart">{cartItems.length ? <><IoCartSharp /></> : <><IoCartOutline /></>}</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
