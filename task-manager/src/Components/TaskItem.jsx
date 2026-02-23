import React from "react";

const TaskItem = ({ id, title, due, priority, completed, toggleTask, deleteTask}) => {
  return (
    <div className="w-full m-auto">
      <div className=" max-w-6xl m-auto bg-white px-4 py-3 flex justify-between items-center mb-2 rounded-md shadow-sm">
        
        {/* toggle */}
        <div className="flex items-center gap-3">
          <input
            checked={completed}
            onChange={() => toggleTask(id)}
            className="w-7 h-4 mb-2"
            type="checkbox"
          />

          {/* Title */}
          <div>
            <h3
              className={`text-lg font-bold ${completed ? "line-through text-gray-400" : ""}`}
            >
              {title}
            </h3>

            {/* due */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <span>
                Due: <span className="text-red-500 font-medium"> {due}</span>
              </span>
              <span className="text-gray-400">|</span>

             {/* priority */}
              <span>
                Priority:{" "}
                <span className="text-red-500 font-medium">{priority}</span>
              </span>
            </div>
          </div>
        </div>
          
          {/* buttons */}

        <div className="flex items-center gap-4">
          <button className="py-1 px-5 font-semibold bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
            Edit
          </button>
          <button
          onClick={() => deleteTask(id)} 
          className="py-1 px-5 font-semibold bg-red-500 text-white rounded-md hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
