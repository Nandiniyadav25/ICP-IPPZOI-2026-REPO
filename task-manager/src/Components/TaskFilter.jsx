import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <section className="w-full p-4 ">
      <div className="flex justify-between max-w-6xl m-auto">
        <div className="flex items-center ">
            {/* All */}
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1 rounded-sm shadow-md font-semibold ${
              filter === "all"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-600 border border-gray-300"
            }`}
          >
            All
          </button>

          {/* Pending */}
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-1 rounded-sm shadow-md font-semibold ${
              filter === "pending"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-600 border border-gray-300"
            }`}
          >
            Pending
          </button>

          {/* Completed */}
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-1 rounded-sm shadow-md font-semibold ${
              filter === "completed"
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-600 border border-gray-300"
            }`}
          >
            Completed
          </button>
        </div>

        <div className="w-full md:w-1/3 bg-white flex items-center gap-2 py-1 px-2 rounded-md shadow-md">
          <i className="ri-search-line text-gray-600 font-semibold"></i>
          <input
            className="outline-none"
            type="text"
            placeholder="Search tasks..."
            name="search"
          />
        </div>
      </div>
    </section>
  );
};

export default TaskFilter;
