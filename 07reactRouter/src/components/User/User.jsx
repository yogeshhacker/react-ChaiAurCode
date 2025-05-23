import React from 'react'
import { useParams } from 'react-router'

function User() {
    const { userid } = useParams()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-white px-4 py-12">
            <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 p-10 flex flex-col items-center space-y-6 max-w-md w-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center shadow-lg mb-2">
                    <span className="text-3xl font-bold text-white">{userid?.charAt(0)?.toUpperCase() || "U"}</span>
                </div>
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    User Profile
                </h1>
                <p className="text-lg text-gray-700">
                    User ID: <span className="font-semibold text-orange-600">{userid}</span>
                </p>
            </div>
        </div>
    )
}

export default User