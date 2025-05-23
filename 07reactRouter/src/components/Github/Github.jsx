import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
function Github() {
    const profile = useLoaderData();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://api.github.com/users/yogeshhacker")
//       .then((res) => res.json())
//       .then((data) => {
//         setProfile(data);
//         setLoading(false);
//       });
//   }, [profile]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-orange-100 to-pink-100">
//         <div className="text-xl font-bold text-orange-600 animate-pulse">
//           Loading...
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-orange-100 to-pink-100 px-4 py-12">
      <div className="bg-white/90 rounded-3xl shadow-2xl border border-orange-100 p-10 flex flex-col items-center space-y-6 max-w-md w-full">
      {console.log('data is fetched')}
        <img
          src={profile.avatar_url}
          alt="Avatar"
          className="w-20 h-20 rounded-full shadow-lg mb-2 border-4 border-pink-200 bg-white"
        />
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          {profile.name || "GitHub User"}
        </h1>
        <p className="text-lg text-gray-700">@{profile.login}</p>
        <div className="flex gap-8 my-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-orange-600">
              {profile.followers}
            </span>
            <span className="text-gray-500 text-sm">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-orange-600">
              {profile.following}
            </span>
            <span className="text-gray-500 text-sm">Following</span>
          </div>
        </div>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold rounded-xl shadow hover:from-orange-700 hover:to-pink-700 transition"
        >
          Visit Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/yogeshhacker`)
    return response.json();
}