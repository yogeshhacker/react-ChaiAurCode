import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 border border-orange-100">
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="About"
            className="w-28 h-28 rounded-full shadow-lg border-4 border-orange-200 mb-2"
          />
          <h1 className="text-4xl font-extrabold text-orange-700 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to our React Router demo project! This page showcases how to use modern React and Tailwind CSS to build beautiful, responsive single-page applications with smooth navigation.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1 bg-orange-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-orange-600 mb-2">Our Mission</h2>
              <p className="text-gray-600">
                To help developers learn and build amazing web apps using the latest technologies and best practices.
              </p>
            </div>
            <div className="flex-1 bg-pink-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">Technologies</h2>
              <ul className="text-gray-600 list-disc list-inside">
                <li>React & React Router</li>
                <li>Tailwind CSS</li>
                <li>Modern JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold rounded-xl shadow hover:from-orange-700 hover:to-pink-700 transition"
            >
              Learn More About React Router
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
