import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 border border-yellow-200">
      <h2 className="text-2xl font-bold text-yellow-900 mb-6 text-center">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-900"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-yellow-900"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-yellow-700 to-yellow-900 text-white font-bold rounded-lg shadow hover:from-yellow-800 hover:to-yellow-950 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
