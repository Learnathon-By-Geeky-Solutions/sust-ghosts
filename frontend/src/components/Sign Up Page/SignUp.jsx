import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-md w-full space-y-8 p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl">
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          Create Your Catalyst Account
        </h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Sign up to get started
        </p>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <input
              type="text"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              type="text"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Workshop Name"
            />
          </div>
          <div>
            <input
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
        </form>

        <div className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default SignUpPage;
