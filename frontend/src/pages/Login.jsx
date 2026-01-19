import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center  px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg w-full max-w-[400px] flex flex-col gap-4 text-gray-600"
      >
        {/* Header */}
        <div className="mb-2">
          <h2 className="text-2xl font-semibold text-gray-700">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Please {state === "Sign Up" ? "sign up" : "log in"} to book
            appointment
          </p>
        </div>

        {
          state === 'Sign Up' &&
          <div className="w-full">
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500 transition-all"
              required
            />
          </div>
        }

        {/* Email Field */}
        <div className="w-full">
          <label className="text-sm font-medium mb-1 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500 transition-all"
            required
          />
        </div>

        {/* Password Field */}
        <div className="w-full">
          <label className="text-sm font-medium mb-1 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500 transition-all"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#5f6FFF] text-white py-2.5 rounded-md font-medium mt-2 hover:bg-[#4e5ce6] transition-colors"
        >
          Login
        </button>

        {/* Footer Link */}
        <p className="text-sm text-center mt-2">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}
          <span
            onClick={() => {state === "Sign Up" ? setState("Login") : setState("Sign Up");}}
            className="text-[#5f6FFF] underline cursor-pointer"
          >
            {state === "Sign Up" ? "Login here?" : "Click here?"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
