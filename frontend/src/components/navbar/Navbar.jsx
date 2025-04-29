import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { AccountCircle, Notifications, Logout } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  const { userEmail, updateUserEmail, updateAccessToken } = useUser();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    updateUserEmail(null);
    updateAccessToken(null);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-[#1a1c2e]/80 backdrop-blur-sm border-b border-[#3a3f5a]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-64"></div> {/* Spacer for sidebar */}

          <div className="flex-1 flex justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Catalyst
            </span>
          </div>

          <div className="w-64 flex justify-end">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <AccountCircle className="w-8 h-8" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-[#2a2f4a] shadow-lg border border-[#3a3f5a] overflow-hidden">
                  <div className="px-4 py-3 border-b border-[#3a3f5a]">
                    <p className="text-sm text-gray-300">{userEmail}</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                        // Add notification functionality here
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3f5a] transition-colors duration-200"
                    >
                      <Notifications className="w-5 h-5 mr-2" />
                      Notifications
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-[#3a3f5a] transition-colors duration-200"
                    >
                      <Logout className="w-5 h-5 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
