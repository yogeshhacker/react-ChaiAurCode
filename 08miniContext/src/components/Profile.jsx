import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 border border-yellow-200 text-center text-yellow-900 text-lg font-semibold">
        Please Login
      </div>
    );

  return (
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 border border-yellow-200 text-center">
      <div className="text-2xl font-bold text-yellow-900 mb-2">
        Welcome,{" "}
        <span className="bg-gradient-to-r from-yellow-700 to-yellow-900 bg-clip-text text-transparent">
          {user.username}
        </span>
        !
      </div>
      <div className="text-yellow-800">You are now logged in.</div>
    </div>
  );
}

export default Profile;
