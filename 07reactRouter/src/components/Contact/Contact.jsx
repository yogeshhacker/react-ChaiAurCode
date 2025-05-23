import React from 'react'

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-white flex items-center justify-center py-12 px-4">
            <div className="max-w-5xl w-full mx-auto bg-white/80 rounded-3xl shadow-2xl p-8 md:p-14 border border-orange-100 backdrop-blur">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-orange-700 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-gray-700">
                                We'd love to hear from you! Fill in the form to start a conversation.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="bg-orange-100 p-3 rounded-full shadow">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-7 h-7 text-orange-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </span>
                                <span className="text-md font-semibold text-gray-700">
                                    Acme Inc, Street, State, Postal Code
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-orange-100 p-3 rounded-full shadow">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-7 h-7 text-orange-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </span>
                                <span className="text-md font-semibold text-gray-700">
                                    +44 1234567890
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="bg-orange-100 p-3 rounded-full shadow">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-7 h-7 text-orange-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </span>
                                <span className="text-md font-semibold text-gray-700">
                                    info@acme.org
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center space-y-5 border border-orange-100">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="tel" className="sr-only">
                                Telephone Number
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Telephone Number"
                                className="w-full py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                placeholder="Your Message"
                                className="w-full py-3 px-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg mt-2 shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

