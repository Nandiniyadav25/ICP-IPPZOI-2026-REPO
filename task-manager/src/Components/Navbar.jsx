import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white w-full py-4 px-6 shadow-lg">
      <div className="flex justify-between items-center mx-auto max-w-7xl">

        {/* Left Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">📝</span>
          <h1 className="text-xl font-bold tracking-wide">Task Manager</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-7">
          <span className=" bg-white text-teal-600  hover:bg-teal-100 hover:text-teal-700 transition font-semibold py-2 px-4 rounded-md shadow-md">4 Tasks</span>
          <button className="text-xl"><i className="ri-moon-fill"></i></button>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;
