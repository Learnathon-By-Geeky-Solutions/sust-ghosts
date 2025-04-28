import React, { useState } from "react";
import { FaCheckCircle, FaFlag } from "react-icons/fa";

function StatusBadge({ status }) {
  let color = "";
  let text = "";
  if (status === "Completed" || status === "COMPLETE") {
    color = "bg-green-600 text-white";
    text = "COMPLETE";
  } else if (status === "In Progress" || status === "IN PROGRESS") {
    color = "bg-blue-700 text-white";
    text = "IN PROGRESS";
  } else {
    color = "bg-gray-700 text-white";
    text = "TO DO";
  }
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${color}`}>
      {text}
    </span>
  );
}

function PriorityFlag({ priority }) {
  let color = "";
  if (priority === "High" || priority === "Urgent") color = "text-red-400";
  else if (priority === "Medium" || priority === "Normal") color = "text-yellow-400";
  else color = "text-gray-400";
  return (
    <span className="flex items-center gap-1">
      <FaFlag className={color} />
      <span className="text-sm">{priority || "-"}</span>
    </span>
  );
}

function Assignee({ name }) {
  if (!name) return <span className="text-gray-400">-</span>;
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase();
  return (
    <span className="flex items-center gap-2">
      <span className="w-7 h-7 rounded-full bg-[#232b3e] flex items-center justify-center text-xs font-bold text-[#b388ff] border border-[#444]">
        {initials}
      </span>
      <span className="text-sm">{name}</span>
    </span>
  );
}

function TaskTableSection({ title, tasks }) {
  return (
    <section className="w-full mb-2">
      <div className="flex items-center gap-2 py-3 border-b border-[#333] bg-[#232b3e]">
        <StatusBadge status={title} />
        <span className="text-base font-bold text-white">{title}</span>
        <span className="text-xs text-gray-400 font-semibold">{tasks.length}</span>
        <button className="ml-2 text-xs text-[#b388ff] hover:underline">+ Add Task</button>
      </div>
      <table className="w-full text-left text-white">
        <thead className="bg-[#232b3e]">
          <tr className="border-b border-[#333] text-xs text-gray-400">
            <th className="py-2 px-2 font-normal">Name</th>
            <th className="py-2 px-2 font-normal">Assignee</th>
            <th className="py-2 px-2 font-normal">Due date</th>
            <th className="py-2 px-2 font-normal">Priority</th>
            <th className="py-2 px-2 font-normal">Status</th>
            <th className="py-2 px-2 font-normal">Comments</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-4 text-gray-400 text-center">
                No tasks
              </td>
            </tr>
          ) : (
            tasks.map((task, idx) => (
              <tr key={idx} className="border-b border-[#222] hover:bg-[#23272f] transition">
                <td className="py-2 px-2 font-medium flex items-center gap-2">
                  {task.isCompleted && <FaCheckCircle className="text-green-500" />}
                  <span className={task.isCompleted ? "line-through" : ""}>
                    {task.title}
                  </span>
                </td>
                <td className="py-2 px-2">
                  <Assignee name={task.assignee} />
                </td>
                <td className="py-2 px-2 text-[#3de6b0] font-semibold">
                  {task.dueDate || task.date}
                </td>
                <td className="py-2 px-2">
                  <PriorityFlag priority={task.priority} />
                </td>
                <td className="py-2 px-2">
                  <StatusBadge status={task.status || (task.isCompleted ? "Completed" : "TO DO")} />
                </td>
                <td className="py-2 px-2 text-gray-300">{task.comment || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default function TaskDetailsView() {
  const [tab, setTab] = useState(1);

  const inProgressTasks = [
    {
      title: "Home Page Creation",
      date: "Jan 27",
      workspace: "Team Space",
      project: "Project 1",
      isCompleted: false,
      assignee: "KS",
      dueDate: "Jan 27",
      priority: "Urgent",
      status: "IN PROGRESS",
      comment: "",
    },
  ];

  const toDoTasks = [
    {
      title: "kjsfkjsjkdfkjsjkdfkjsd",
      date: "Feb 6",
      workspace: "Team Space",
      project: "Project 1",
      isCompleted: false,
      assignee: "RA",
      dueDate: "Feb 6",
      priority: "High",
      status: "TO DO",
      comment: "",
    },
  ];

  const completedTasks = [
    {
      title: "hkkjhk",
      date: "Feb 6",
      workspace: "Team Space",
      project: "Project 1",
      isCompleted: true,
      assignee: "KS",
      dueDate: "Feb 6",
      priority: "Normal",
      status: "COMPLETE",
      comment: "",
    },
  ];

  const tabList = ["Board", "List", "Dashboard"];

  return (
    <div className="flex-1 h-screen overflow-y-auto bg-[#23272f]">
      {/* Tabs */}
      <div className="sticky top-0 z-20 bg-[#232b3e] border-b border-[#333] px-8 pt-6 pb-2 rounded-t-xl">
        <div className="flex space-x-8">
          {tabList.map((label, idx) => (
            <button
              key={label}
              className={`uppercase tracking-wide pb-2 text-sm font-semibold ${
                tab === idx
                  ? "text-[#b388ff] border-b-2 border-[#b388ff]"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
              onClick={() => setTab(idx)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      {tab === 1 && (
        <div className="w-full px-0 py-0 overflow-x-hidden">
          <TaskTableSection title="COMPLETE" tasks={completedTasks} />
          <TaskTableSection title="IN PROGRESS" tasks={inProgressTasks} />
          <TaskTableSection title="TO DO" tasks={toDoTasks} />
        </div>
      )}
      {tab === 0 && (
        <div className="w-full px-4 py-8 text-white overflow-x-hidden">
          Board view coming soon...
        </div>
      )}
      {tab === 2 && (
        <div className="w-full px-4 py-8 text-white overflow-x-hidden">
          Dashboard view coming soon...
        </div>
      )}
    </div>
  );
}