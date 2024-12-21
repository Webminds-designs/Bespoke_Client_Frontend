import React from "react";
import { Profile_Avatar } from "./Profile_Avatar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { IoMdLogIn } from "react-icons/io";
function Navbar() {
  const user = useSelector((state) => state.Auth.user); // Get user from Redux state
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleCartClick = () => {
    if (!user) {
      navigate("/login"); // Redirect to login if user is not authenticated
    } else {
      navigate("/cart"); // Navigate to cart if user is authenticated
    }
  };

  return (
    <div className="absolute z-30 w-full  backdrop-blur-[10px] bg-[#ffffff46] top-0 left-0 flex flex-row justify-between py-2 items-center px-20 ">
      <img
        src={logo}
        alt="logo"
        className="w-auto h-10 object-cover hover:cursor-pointer hover:scale-[1.05] transition-all duration-500 "
        draggable="false"
      />

      <div className="flex flex-row gap-20 2xl:text-[22px] lg:text-[20px] py-5 text-[#533B30] font-normal cursor-pointer">
        <Link to="/" className="hover:scale-[1.15] transition-all duration-300">
          Home
        </Link>
        <Link
          to="/product-list"
          className="hover:scale-[1.15] transition-all duration-300"
        >
          Product Listing
        </Link>
        <Link
          to="/aboutus"
          className="hover:scale-[1.15] transition-all duration-300"
        >
          About Us
        </Link>
        <Link
          to="/contactus"
          className="hover:scale-[1.15] transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
