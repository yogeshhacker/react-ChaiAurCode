import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-white flex items-center justify-center py-12 px-4">
            <div className="mx-auto w-full max-w-6xl px-4 py-8">
                {/* Hero Section */}
                <aside className="relative overflow-hidden bg-white rounded-3xl shadow-2xl sm:mx-16 mx-2 sm:py-20 py-12 flex flex-col sm:flex-row items-center">
                    {/* Text Content */}
                    <div className="relative z-10 max-w-xl w-full space-y-8 text-center sm:text-left sm:ml-8">
                        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            <span className="block">Welcome to</span>
                            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                                React Router Demo
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore beautiful, responsive single-page applications built with React, React Router, and Tailwind CSS. Enjoy seamless navigation and modern UI design.
                        </p>
                        <Link
                            className="inline-flex items-center px-8 py-4 font-semibold bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl hover:from-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                            to="/about"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Learn More
                        </Link>
                    </div>
                    {/* Hero Image */}
                    <div className="absolute sm:static right-0 top-0 sm:w-1/2 w-full h-72 sm:h-auto sm:my-0 my-8">
                        <img
                            className="w-full h-full object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
                            src="https://images.pexels.com/photos/32137142/pexels-photo-32137142/free-photo-of-intricate-geometric-stained-glass-ceiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Geometric Pattern"
                        />
                    </div>
                </aside>

                {/* Features Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative flex flex-col items-center bg-white rounded-xl p-8 shadow-lg">
                            <img
                                className="w-24 h-24 rounded-full shadow-xl mb-4"
                                src="https://images.pexels.com/photos/15099288/pexels-photo-15099288/free-photo-of-silhouette-of-woman-dancing-in-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Dancing Woman"
                            />
                            <h3 className="text-xl font-bold text-orange-600 mb-2">Modern UI</h3>
                            <p className="text-gray-600">Beautiful layouts with Tailwind CSS and smooth animations for a delightful user experience.</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative flex flex-col items-center bg-white rounded-xl p-8 shadow-lg">
                            <img
                                className="w-24 h-24 rounded-full shadow-xl mb-4"
                                src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Navigation"
                            />
                            <h3 className="text-xl font-bold text-pink-600 mb-2">Seamless Navigation</h3>
                            <p className="text-gray-600">Navigate between pages instantly using React Router, with no page reloads.</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative flex flex-col items-center bg-white rounded-xl p-8 shadow-lg">
                            <img
                                className="w-24 h-24 rounded-full shadow-xl mb-4"
                                src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Responsive"
                            />
                            <h3 className="text-xl font-bold text-orange-600 mb-2">Fully Responsive</h3>
                            <p className="text-gray-600">Looks great on all devices, from mobile to desktop, thanks to responsive design.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <h1 className="text-center text-3xl sm:text-5xl py-16 font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Start exploring React Router & Tailwind CSS!
                </h1>
            </div>
        </div>
    );
}
