import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import DashboardCards from "../DashboardCards/DashboardCards";
import { useUser } from "../../context/UserContext";
import axios from 'axios';

const MainHomePage = () => {
  // const { userEmail } = useUser();

  // useEffect(() => {
  //   let email = userEmail;
  //   console.log(email)
  //   if (!userEmail) email = 'free@gmail.com'; // don't run until userEmail is available

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios({
  //         method: 'get',
  //         url: 'http://localhost:3000/find/find',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         data: {
  //           workspaceOwner: email
  //         }
  //       });

  //       console.log('Response:', response.data);
  //     } catch (error) {
  //       console.error('Axios error:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, [userEmail]); // run when userEmail is set

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen bg-gradient-to-br from-[#1a1c2e] to-[#2a2f4a]">
        <Topbar />
        <div className="flex-1 overflow-y-auto p-4">
          <div className="w-[95%] max-w-[1400px] mx-auto rounded-xl bg-[#2a2f4a]/80 backdrop-blur-sm shadow-lg border border-[#3a3f5a] min-h-full">
            <DashboardCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHomePage;
