import React, { useState } from "react";
import { assets } from "../assets/assets.js";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  // Profile data state
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    img: assets.profile_pic,
    address1: "57th Cross, Richmond ",
    address2: "Circle, Church Road, London",
    gender: "Male",
    dob: "20 July, 2024",
  });

  return (
    <div className="max-w-xl sm:max-w-2xl p-6 flex flex-col gap-3 sm:gap-6 text-zinc-700">
      {/* Profile Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <img className="w-36 rounded-lg" src={userData.img} alt="Profile" />
          <img
            className="w-36 rounded-lg"
            src={assets.upload_icon}
            alt="Profile"
          />
        </div>

        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="text-3xl font-medium text-neutral-800 mt-4 border-b border-zinc-200 pb-2 outline-none"
          />
        ) : (
          <h1 className="text-3xl font-medium text-neutral-800 mt-4 border-b border-zinc-200 pb-2">
            {userData.name}
          </h1>
        )}
      </div>

      {/* Contact Information Section */}
      <section>
        <p className="text-neutral-500 underline uppercase tracking-wide mb-4">
          Contact Information
        </p>

        <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm max-w-50">
          <p className="font-medium">Email id:</p>
          {isEdit ? (
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          ) : (
            <div>
              <p className="text-blue-500 ">{userData.email}</p>
            </div>
          )}

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="number"
              value={userData.phone}
              className="max-w-50"
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          ) : (
            <div>
              <p className="text-gray-500 ">{userData.phone}</p>
            </div>
          )}

          <p className="font-medium">Address:</p>
          <div className="flex flex-col">
            {isEdit ? (
              <input
                type="text"
                value={userData.address1}
                className="max-w-50"
                onChange={(e) =>
                  setUserData({ ...userData, address1: e.target.value })
                }
              />
            ) : (
              <div>
                <p className="text-gray-500 ">{userData.address1}</p>
              </div>
            )}

            {isEdit ? (
              <input
                type="text"
                value={userData.address2}
                className="max-w-50"
                onChange={(e) =>
                  setUserData({ ...userData, address2: e.target.value })
                }
              />
            ) : (
              <div>
                <p className="text-gray-500 ">{userData.address2}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Basic Information Section */}
      <section>
        <p className="text-neutral-500 underline uppercase tracking-wide mb-4">
          Basic Information
        </p>
        <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              className="max-w-50"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-500">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input type="date"
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
              className="max-w-50"
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        {!isEdit ? (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-[#5f6FFF] px-10 py-2 rounded-full text-zinc-600 hover:bg-[#5f6FFF] hover:text-white transition-all"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-[#5f6FFF] px-8 py-2 rounded-full text-zinc-600 hover:bg-[#5f6FFF] hover:text-white transition-all"
          >
            Save information
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
