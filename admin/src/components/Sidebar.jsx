import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {

    const {aToken} = useContext(AdminContext)

  return (
    <div className="min-h-screen min-w-14 md:min-w-72 bg-white border-r-2 border-gray-100">
      {aToken && (
        <ul className="pt-5 text-sm">
          <NavLink
            className={({ isActive }) =>
              `flex gap-3 my-2 px-3 py-2 md:px-9 md:min-w-72 items-center ${
                isActive
                  ? "bg-[#f2f3ff] cursor-pointer border-r-4 border-[#5f6fff]"
                  : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img className="w-6" src={assets.home_icon} alt="home" />
            <p className="hidden md:flex">Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex gap-2 my-2 px-3 py-2 md:px-9 md:min-w-72 items-center ${
                isActive
                  ? "bg-[#f2f3ff] cursor-pointer border-r-4 border-[#5f6fff]"
                  : ""
              }`
            }
            to={"/all-appointments"}
          >
            <img src={assets.appointment_icon} alt="appointments" />
            <p className="hidden md:flex">Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex gap-2 my-2 px-3 py-2 md:px-9 md:min-w-72 items-center ${
                isActive
                  ? "bg-[#f2f3ff] cursor-pointer border-r-4 border-[#5f6fff]"
                  : ""
              }`
            }
            to={"/add-doctor"}
          >
            <img src={assets.add_icon} alt="add" />
            <p className="hidden md:flex">Add Doctor</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex gap-3 my-2 py-2 px-3 md:px-9 md:min-w-72 items-center ${
                isActive
                  ? "bg-[#f2f3ff] cursor-pointer border-r-4 border-[#5f6fff]"
                  : ""
              }`
            }
            to={"/doctors-list"}
          >
            <img  src={assets.people_icon} alt="list" />
            <p className="hidden md:flex">Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Sidebar