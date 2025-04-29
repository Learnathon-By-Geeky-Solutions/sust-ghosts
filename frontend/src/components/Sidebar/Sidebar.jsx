import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaInbox,
  FaComments,
  FaFileAlt,
  FaEllipsisH,
  FaUsers,
  FaFolder,
  FaPlus,
  FaChevronDown,
  FaChevronRight,
  FaUserPlus,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();
  // Dropdown states
  const [teamOpen, setTeamOpen] = useState(true);
  const [projectssOpen, setProjectssOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [showInvite, setShowInvite] = useState(false);
  const [showCreateSpace, setShowCreateSpace] = useState(false);
  const [roleDropdown, setRoleDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Member");
  const [workspaceMenuOpen, setWorkspaceMenuOpen] = useState(false);

  const workspaceMenuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        workspaceMenuRef.current &&
        !workspaceMenuRef.current.contains(event.target)
      ) {
        setWorkspaceMenuOpen(false);
      }
    }
    if (workspaceMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [workspaceMenuOpen]);

  const handleHomeClick = () => {
    navigate('/main-home');
  };

  const handleProjectClick = (projectName) => {
    navigate('/home', { state: { projectName } });
  };

  return (
    <aside className="flex flex-col h-screen bg-[#23272f] border-r border-[#222] w-[260px] min-w-[260px] max-w-[260px] shadow-lg">
      {/* Workspace header */}
      <div
        className="flex items-center px-4 py-4 border-b border-[#222] relative"
        ref={workspaceMenuRef}
      >
        <div className="flex items-center px-4 py-4 border-b border-[#222] relative">
          <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            W
          </div>
          <span
            className="ml-3 text-white font-semibold truncate cursor-pointer"
            onClick={() => setWorkspaceMenuOpen((v) => !v)}
          >
            Workspace Name
          </span>
          <FaChevronDown
            className="ml-auto text-white cursor-pointer"
            onClick={() => setWorkspaceMenuOpen((v) => !v)}
          />
          {workspaceMenuOpen && (
            <div className="absolute left-0 top-16 z-50 w-72 bg-[#181c23] border border-[#333] rounded-xl shadow-xl py-2">
              <div className="flex items-center px-4 py-3 gap-3 border-b border-[#333]">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
                <div>
                  <div className="text-white font-semibold">
                    Workspace Name
                  </div>
                  <div className="text-xs text-gray-400">
                    Free Forever • 2 members
                  </div>
                </div>
              </div>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <span className="text-lg">⚙️</span> Settings
              </button>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <span className="text-lg">🪄</span> Upgrade
              </button>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <FaUsers /> Manage users
              </button>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <span className="text-lg">🧩</span> App Center
              </button>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <span className="text-lg">📄</span> Template Center
              </button>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <span className="text-lg">📝</span> Custom Field Manager
              </button>
              <button className="flex items-center w-full px-4 py-2 text-white hover:bg-[#232b3e] gap-2">
                <span className="text-lg">🤖</span> Automations Manager
              </button>
              <div className="border-t border-[#333] my-2" />
              <button className="flex items-center w-full px-4 py-2 text-[#b388ff] hover:bg-[#232b3e] gap-2 font-semibold">
                <FaPlus /> Create Workspace
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main menu */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {/* Home */}
        <div
          className="flex items-center mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded transition text-white gap-3"
          onClick={handleHomeClick}
        >
          <FaHome className="text-[#b0b0b0]" />
          <span className="text-[15px]">Home</span>
        </div>
        {/* Inbox with badge */}
        <div className="flex items-center mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded transition text-white gap-3 relative">
          <FaInbox className="text-[#b0b0b0]" />
          <span className="text-[15px]">Inbox</span>
          <span className="absolute right-4 bg-[#b01357] text-white text-xs font-bold px-2 py-0.5 rounded-full">
            2
          </span>
        </div>
        {/* Chat */}
        <div className="flex items-center mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded transition text-white gap-3">
          <FaComments className="text-[#b0b0b0]" />
          <span className="text-[15px]">Chat</span>
        </div>
        {/* Spaces */}
        <div className="mt-6">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-white font-semibold text-[15px]">Spaces</span>
            <button
              className="w-6 h-6 flex items-center justify-center rounded bg-[#3b2bbd] hover:bg-[#4f3eea]"
              onClick={() => setShowCreateSpace(true)}
            >
              <FaPlus className="text-white text-xs" />
            </button>
          </div>
          {/* Everything */}
          <div className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded">
            <span className="text-lg">✱</span>
            <span>Everything</span>
          </div>
          {/* Team Space Dropdown */}
          <button
            className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded w-full"
            onClick={() => setTeamOpen((v) => !v)}
          >
            {teamOpen ? (
              <FaChevronDown className="text-xs" />
            ) : (
              <FaChevronRight className="text-xs" />
            )}
            <FaUsers />
            <span>Team Space</span>
            <FaPlus className="ml-auto text-xs opacity-70" />
          </button>
          {/* Team Space Children */}
          <div
            className={`ml-6 overflow-hidden transition-all duration-300 ${teamOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            {/* projectss Dropdown */}
            <button
              className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded w-full"
              onClick={() => setProjectssOpen((v) => !v)}
            >
              {projectssOpen ? (
                <FaChevronDown className="text-xs" />
              ) : (
                <FaChevronRight className="text-xs" />
              )}
              <FaFolder />
              <span>projectss</span>
              <FaPlus className="ml-auto text-xs opacity-70" />
            </button>
            {/* projectss Children */}
            <div
              className={`ml-6 overflow-hidden transition-all duration-300 ${projectssOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
                }`}
            >
              <div className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded">
                <FaFileAlt />
                <span>Subproject 1</span>
              </div>
              <div className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded">
                <FaFileAlt />
                <span>Subproject 2</span>
              </div>
            </div>
            {/* Projects Dropdown */}
            <button
              className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded w-full"
              onClick={() => setProjectsOpen((v) => !v)}
            >
              {projectsOpen ? (
                <FaChevronDown className="text-xs" />
              ) : (
                <FaChevronRight className="text-xs" />
              )}
              <FaFolder />
              <span>Projects</span>
              <FaEllipsisH className="ml-auto text-xs opacity-70" />
              <FaPlus className="ml-1 text-xs opacity-70" />
            </button>
            {/* Projects Children */}
            <div
              className={`ml-6 overflow-hidden transition-all duration-300 ${projectsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div
                className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded"
                onClick={() => handleProjectClick('Project 1')}
              >
                <FaFileAlt />
                <span>Project 1</span>
              </div>
              <div
                className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded"
                onClick={() => handleProjectClick('Project 2')}
              >
                <FaFileAlt />
                <span>Project 2</span>
              </div>
              <div
                className="flex items-center gap-2 text-white mb-1 cursor-pointer hover:bg-[#232b3e] p-2 rounded"
                onClick={() => handleProjectClick('Project 3')}
              >
                <FaFileAlt />
                <span>Project 3</span>
              </div>
            </div>
          </div>
          {/* Create Space */}
          <div
            className="flex items-center gap-2 text-white mt-2 cursor-pointer hover:bg-[#232b3e] p-2 rounded"
            onClick={() => setShowCreateSpace(true)}
          >
            <FaPlus />
            <span>Create Space</span>
          </div>
        </div>
      </nav>
      {/* Footer */}
      <div className="px-2 pb-4 border-t border-[#222]">
        <div
          className="flex items-center gap-2 text-white mt-4 mb-2 cursor-pointer hover:bg-[#232b3e] p-2 rounded"
          onClick={() => setShowInvite(true)}
        >
          <FaUserPlus />
          <span>Invite</span>
        </div>
        <div className="flex items-center gap-2 text-white mb-2 cursor-pointer hover:bg-[#232b3e] p-2 rounded">
          <FaQuestionCircle />
          <span>Help</span>
        </div>
      </div>
      {showInvite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-[#23272f] rounded-xl shadow-2xl w-full max-w-md p-8 relative border border-[#333]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              onClick={() => setShowInvite(false)}
            >
              ×
            </button>
            <h2 className="text-white text-2xl font-bold mb-2">
              Invite people
            </h2>
            <div className="mb-4">
              <label className="block text-white mb-1">Invite by email</label>
              <input
                className="w-full bg-transparent border border-[#444] rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#b388ff] transition"
                placeholder="Email, comma or space separated"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-1">Invite as</label>
              <div className="relative">
                <button
                  className="flex items-center gap-2 text-white w-full p-2 rounded border border-[#444] bg-[#23272f] hover:border-[#b388ff] transition"
                  onClick={() => setRoleDropdown((v) => !v)}
                  type="button"
                >
                  <FaUsers />
                  <span>{selectedRole}</span>
                  <FaChevronDown className="ml-2" />
                </button>
                <span className="block text-gray-400 text-sm mt-1">
                  {selectedRole === "Member" &&
                    "Can access all public items in your Workspace."}
                  {selectedRole === "Limited Member" &&
                    "Can only access items shared with them."}
                  {selectedRole === "Guest" &&
                    "Can only access items shared with them."}
                  {selectedRole === "Admin" &&
                    "Can manage Spaces, People, Billing and other Workspace settings."}
                </span>
                {/* Dropdown */}
                {roleDropdown && (
                  <div className="absolute left-0 top-12 w-full bg-[#181c23] border border-[#444] rounded shadow-lg z-10">
                    {["Member", "Limited Member", "Guest", "Admin"].map(
                      (role) => (
                        <div
                          key={role}
                          className={`flex flex-col px-4 py-2 cursor-pointer hover:bg-[#232b3e] ${selectedRole === role ? "bg-[#232b3e]" : ""
                            }`}
                          onClick={() => {
                            setSelectedRole(role);
                            setRoleDropdown(false);
                          }}
                        >
                          <span className="text-white font-semibold">
                            {role}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {role === "Member" &&
                              "Can access all public items in your Workspace."}
                            {role === "Limited Member" &&
                              "Can only access items shared with them."}
                            {role === "Guest" &&
                              "Can only access items shared with them."}
                            {role === "Admin" &&
                              "Can manage Spaces, People, Billing and other Workspace settings."}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="text-gray-300 hover:underline"
                onClick={() => setShowInvite(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[#3b2bbd] hover:bg-[#4f3eea] text-white font-semibold px-6 py-2 rounded-lg"
                onClick={() => {
                  /* handle invite logic here */
                }}
              >
                Send invite
              </button>
            </div>
          </div>
        </div>
      )}
      {showCreateSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-[#23272f] rounded-xl shadow-2xl w-full max-w-lg p-8 relative border border-[#333]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              onClick={() => setShowCreateSpace(false)}
            >
              ×
            </button>
            <h2 className="text-white text-2xl font-bold mb-2">
              Create a Space
            </h2>
            <p className="text-gray-400 mb-6">
              A Space represents teams, departments, or groups, each with its
              own Lists, workflows, and settings.
            </p>
            {/* Icon & name */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#232b3e] border border-[#444] flex items-center justify-center text-lg text-white font-bold mr-4">
                M
              </div>
              <input
                className="flex-1 bg-transparent border border-[#444] rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#b388ff] transition"
                placeholder="e.g. Marketing, Engineering, HR"
              />
            </div>
            {/* Description */}
            <div className="mb-4">
              <input
                className="w-full bg-transparent border border-[#444] rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#b388ff] transition"
                placeholder="Description (optional)"
              />
            </div>
            {/* Make Private */}
            <div className="flex items-center mb-6">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="hidden peer" />
                <span className="w-10 h-6 bg-[#181c23] rounded-full relative transition peer-checked:bg-[#b388ff] mr-3">
                  <span className="absolute left-1 top-1 w-4 h-4 bg-[#444] rounded-full transition peer-checked:translate-x-4 peer-checked:bg-[#b388ff]" />
                </span>
                <span className="text-white">Make Private</span>
              </label>
              <span className="ml-3 text-gray-400 text-sm">
                Only you and invited members have access
              </span>
            </div>
            {/* Use Templates */}
            <button className="w-full text-left text-[#b388ff] hover:underline mb-6">
              Use Templates
            </button>
            {/* Continue Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#3b2bbd] hover:bg-[#4f3eea] text-white font-semibold px-6 py-2 rounded-lg"
                onClick={() => setShowCreateSpace(false)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
