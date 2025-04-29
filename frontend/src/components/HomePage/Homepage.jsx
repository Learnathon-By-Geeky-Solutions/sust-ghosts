import React, { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import TaskDetailsView from "../TaskDetailsView/TaskDetailsView";

export default function Homepage() {
  const { userEmail } = useUser();

  useEffect(() => {
    if (userEmail) {
      console.log("Logged in user email:", userEmail);
    }
  }, [userEmail]);

  return (
    <div className="flex h-screen w-screen bg-[#23272f] overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <Topbar />
        <div className="flex overflow-y-auto bg-[#23272f]">
          <div className="w-full mt-4 mx-4 rounded-xl bg-[#232b3e] shadow-lg">
            <TaskDetailsView />
          </div>
        </div>
      </div>
    </div>
  );
}