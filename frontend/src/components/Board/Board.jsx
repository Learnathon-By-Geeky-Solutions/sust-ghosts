import React from "react";
import { useUser } from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Charts from "../Charts/Charts";

export default function Homepage() {
    return (
        <div className="flex h-screen w-screen bg-[#23272f] overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 h-screen">
                <Topbar />
                <div className="flex overflow-y-auto bg-[#23272f]">
                    <div className="w-full mt-4 mx-4 rounded-xl bg-[#232b3e] shadow-lg">
                        <Charts />
                    </div>
                </div>
            </div>
        </div>
    );
}