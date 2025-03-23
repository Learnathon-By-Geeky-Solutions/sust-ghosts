import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Spaces</h2>
          <ul>
            <li className="mt-2">Everything</li>
            <li className="mt-2">Team Space</li>
            <li className="mt-2">Projects</li>
            <li className="mt-2">View All Spaces</li>
            <li className="mt-2">Create Space</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Project 1</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white p-2 rounded"
            />
            <button className="ml-4 bg-purple-600 p-2 rounded">Add Task</button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto">
          {/* In Progress Section */}
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">In Progress</h2>
            <ul>
              <li className="flex justify-between items-center bg-gray-800 p-2 rounded mt-2">
                <span>Dummy Task 1</span>
                <span className="text-green-400">Jan 27</span>
              </li>
            </ul>
          </div>

          {/* To Do Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">To Do</h2>
            <ul>
              <li className="flex justify-between items-center bg-gray-800 p-2 rounded mt-2">
                <span>Dummy Task 2</span>
                <span className="text-red-400">Feb 6</span>
              </li>
            </ul>
          </div>

          {/* Completed Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">Task Completed</h2>
            <ul>
              <li className="flex justify-between items-center bg-gray-800 p-2 rounded mt-2">
                <span>Dummy Task 3</span>
                <span className="text-green-400">Jan 21</span>
              </li>
            </ul>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Homepage;
