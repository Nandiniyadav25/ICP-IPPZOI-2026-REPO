import React from "react";
import { useState, useEffect } from "react";

const AddTaskForm = ({ onClose, onAdd, darkMode, editTask }) => {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [priority, setPriority] = useState("");

  const handleAddTask = () => {
  if (!title || !due || !priority) return;

  const taskData = {
    id: editTask ? editTask.id : Date.now(),
    title,
    due,
    priority,
    completed: editTask ? editTask.completed : false,
  };

  onAdd(taskData);
  onClose();
};

  useEffect(() => {
  if (editTask) {
    setTitle(editTask.title);
    setDue(editTask.due);
    setPriority(editTask.priority);
  } else {
    setTitle("");
    setDue("");
    setPriority("");
  }
}, [editTask]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div
        className={`w-[90%] max-w-xl rounded-2xl shadow-lg p-6 relative 
  ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <i className={` ${darkMode ? "bg-gray-600 text-white hover:bg-gray-500" 
    : "bg-gray-200 text-gray-700 hover:bg-gray-300"} ri-close-circle-line text-2xl font-medium bg-gray-200 rounded-full`}></i>
        </button>
        <h2 className="text-xl font-semibold mb-6">Add New Task</h2>

        <div className="space-y-5">
          <div className="flex flex-col">
            <label className="font-medium mb-2">Task Name</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className={`p-2 outline-none border rounded-md 
  ${darkMode 
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
    : "bg-white border-gray-300 text-black"}`}
              type="text"
              placeholder="Enter task name.."
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2">Due Date</label>
            <input
              value={due}
              onChange={(e) => {
                setDue(e.target.value);
              }}
              className={`p-2 outline-none border rounded-md 
  ${darkMode 
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
    : "bg-white border-gray-300 text-black"}`}
              type="date"
              placeholder="Select due date..."
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2">Priority</label>
            <select
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              className={`p-2 outline-none border rounded-md 
  ${darkMode 
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
    : "bg-white border-gray-300 text-black"}`}
            >
              <option>Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end mt-10 gap-5">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-md font-semibold
  ${darkMode 
    ? "bg-gray-600 text-white hover:bg-gray-500" 
    : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-teal-600 rounded-md text-white hover:bg-teal-700 font-semibold"
          >
            {editTask? "Update Task":"Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskForm;
