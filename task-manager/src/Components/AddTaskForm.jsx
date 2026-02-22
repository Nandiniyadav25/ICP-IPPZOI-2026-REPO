import React from 'react'

const AddTaskForm = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm'>
      <div className='w-[90%] bg-white max-w-xl rounded-2xl shadow-lg  p-6 relative'>
        <button className='absolute top-4 right-4'>
          <i className="ri-close-circle-line text-2xl font-medium bg-gray-200 rounded-full"></i>
        </button>
        <h2 className='text-xl font-semibold mb-6'>Add New Task</h2>
        
     <div className='space-y-5'>
      <div className='flex flex-col'>
        <label className='font-medium mb-2'>Task Name</label>
        <input className='p-2 outline-none border border-gray-300 rounded-md' type="text" placeholder='Enter task name..' />
      </div>

      <div  className='flex flex-col'>
        <label className='font-medium mb-2'>Due Date</label>
        <input className='p-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400' type="date" placeholder='Select due date...' />
      </div>

      <div  className='flex flex-col'>
        <label className='font-medium mb-2'>Priority</label>
        <select className='p-2 outline-none border border-gray-300 rounded-md'>
          <option>Select priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      </div>

      
      {/* Buttons */}
      <div className='flex items-center justify-end mt-10 gap-5'>
        <button className='px-4 py-2 bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300 font-semibold'>Cancel</button>
        <button className='px-4 py-2 bg-teal-600 rounded-md text-white hover:bg-teal-700 font-semibold'>Add Task</button>

      </div>
</div>
    </div>
  )
}

export default AddTaskForm
