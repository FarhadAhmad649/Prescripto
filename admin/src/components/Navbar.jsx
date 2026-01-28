import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

function Navbar() {
  const { aToken, setAToken } = useContext(AdminContext);
  const {dToken , setDToken} = useContext(DoctorContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken("");
    dToken && setDToken("");

    aToken && localStorage.removeItem("aToken");
    dToken && localStorage.removeItem("dToken");
  };

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-100 bg-white p-3">
      <div className="flex items-center gap-2 text-xs">
        <img className="w-36 cursor-pointer" src={assets.admin_logo} alt="" />
        <p className="border-[1.5px] border-gray-500 rounded-full px-2 py-1">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-[#5f6fff] hover:bg-[#4d5efb] px-8 text-white cursor-pointer py-2 rounded-full text-sm"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
