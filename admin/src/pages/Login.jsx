import React, { useContext } from "react";
import { useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setAToken, backendUrl } = useContext(AdminContext);

  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          console.log(data.token);
          setAToken(data.token);
          localStorage.setItem("aToken", data.token);
          toast.success("Logged in successfully");
          navigate("/admin-dashboard");
        } else {
          toast.error(data.message);
        }
      } else if (state === "Doctor") {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });

        if (data.success) {
          console.log(data.token);
          setDToken(data.token);
          localStorage.setItem("dToken", data.token);
          toast.success("Logged in successfully");
          navigate("/doctor-appointments");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      action=""
      className="min-h-[80vh] flex items-center"
    >
      <div className="flex justify-center items-start flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[#5f5fff]">{state}</span> Login
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            className="border border-[#DADADA] w-full mt-1 p-1"
            type="text"
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            className="border border-[#DADADA] w-full mt-1 p-1"
            type="password"
          />
        </div>

        <button type="submit" className="bg-[#5f6fff] w-full p-1 text-white">
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-blue-400 underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-blue-400 underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
