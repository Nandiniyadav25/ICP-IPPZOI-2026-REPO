import React from "react";

const TaskItem = () => {
  return (
    <div className="w-full m-auto">
      <div className=" max-w-6xl m-auto bg-white px-4 py-3 flex justify-between items-center mb-2 rounded-md shadow-sm">
        <div className="flex items-center gap-3">
          <input className="w-7 h-4 mb-2" type="checkbox" />
          <div>
          <h3 className="text-lg font-bold text-gray-800">
            Design Landing Page
          </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <span>
            Due: <span className="text-red-500 font-medium"> Tomorrow</span>
          </span>
          <span className="text-gray-400">|</span>

          <span>
            Priority: <span className="text-red-500 font-medium">High</span>
          </span>
        </div>
        </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="py-1 px-5 font-semibold bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
            Edit
          </button>
          <button className="py-1 px-5 font-semibold bg-red-500 text-white rounded-md hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
