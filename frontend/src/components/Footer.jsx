import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-6 sm:gap-14 my-10 mt-40 text-sm">
        {/* ----- Left Section ----- */}
        <div>
          <div className="flex items-center gap-2 mb-5 cursor-pointer">
            <div className="w-8 h-8 bg-[#5F6FFF] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✦</span>
            </div>
            <span className="text-[#5F6FFF] text-2xl font-bold tracking-tight">
              Prescripto
            </span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* ----- Center Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="cursor-pointer hover:text-black"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
              className="cursor-pointer hover:text-black"
            >
              About us
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                scrollTo(0, 0);
              }}
              className="cursor-pointer hover:text-black"
            >
              Contact us
            </li>
            <li
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="cursor-pointer hover:text-black"
            >
              Privacy policy
            </li>
          </ul>
        </div>

        {/* ----- Right Section ----- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+92-3429334649</li>
            <li>farhadahmadhassanzai@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ----- Copyright Text ----- */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright © 2026 Ahmad-Dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
