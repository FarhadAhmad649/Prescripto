import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

    const navigate = useNavigate();
    const {token, setToken, userData} = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)

    const logout= ()=>{
      setToken('')
      localStorage.removeItem('token')
    }

  return (
    <nav className="flex items-center justify-between py-4 mb-5 border-b border-b-gray-400">
      {/* Logo Area */}

      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />

      {/* Navigation Links */}
      <ul className="hidden md:flex  md:gap-6 items-start gap-3 font-medium uppercase text-sm">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6fff] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* Action Button */}
      <div className="flex items-cente gap-2">
        {token && userData ? (
          <div className="flex items-center cursor-pointer group relative gap-1">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create account
          </button>
        )}

        <img
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
          onClick={() => setShowMenu(true)}
        />
        {/* ..........Mobile Menu............... */}
        <div
          className={`${showMenu ? "fixed inset-0 block]" : "hidden"} md:hidden text-base font-medium text-gray-600 z-30 `}
        >
          <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
            <div className="flex justify-between">
              <img
                onClick={() => navigate("/")}
                className="w-36 cursor-pointer"
                src={assets.logo}
                alt=""
              />
              <img
                onClick={() => setShowMenu(false)}
                className="w-8 cursor-pointer"
                src={assets.cross_icon}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4 items-center">
              <NavLink onClick={() => setShowMenu(false)} to={"/"}>
                <p className="hover:text-blue-500 cursor-pointer px-4 py-2 rounded inline-block">
                  HOME
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to={"/doctors"}>
                <p className="hover:text-blue-500 cursor-pointer px-4 py-2 rounded inline-block">
                  ALL DOCTORS
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to={"/about"}>
                <p className="hover:text-blue-500 cursor-pointer px-4 py-2 rounded inline-block">
                  ABOUT
                </p>
              </NavLink>
              <NavLink onClick={() => setShowMenu(false)} to={"/contact"}>
                <p className="hover:text-blue-500 cursor-pointer px-4 py-2 rounded inline-block">
                  CONTACT
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
