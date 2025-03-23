import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Spaces</h2>
        <ul>
          <li className="mt-2">Everything</li>
          <li className="mt-2">Team Space</li>
          <li className="mt-2">Projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;