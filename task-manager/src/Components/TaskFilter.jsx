import React from 'react'

const TaskFilter = () => {
  return (
    <section className='w-full p-4 '>
        <div className='flex justify-between max-w-6xl m-auto'>
            <div className='flex items-center '>
                <button className='border border-gray-300 text-gray-600 active:bg-teal-600 active:text-white rounded-sm px-4 py-1 bg-white shadow-md font-semibold'>All</button>
                <button className='border border-gray-300 text-gray-600 rounded-sm px-4 py-1 bg-white shadow-md font-semibold'>Pending</button>
                <button className='border border-gray-300 text-gray-600 rounded-sm px-4 py-1 bg-white shadow-md font-semibold'>Completed</button>
            </div>
        

        <div className='w-full md:w-1/3 bg-white flex items-center gap-2 py-1 px-2 rounded-md shadow-md'>
            <i className="ri-search-line text-gray-600 font-semibold"></i>
            <input className='outline-none' type="text" placeholder='Search tasks...' name='search' />
        </div>
        </div>
    </section>
  )
}

export default TaskFilter
