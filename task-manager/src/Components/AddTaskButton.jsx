import React from 'react'

const AddTaskButton = ({onClick }) => {
  return (
    <div className='mt-10 flex items-center justify-center '>
      <button 
      onClick={onClick}
      className='py-2 px-8 bg-teal-600 text-white rounded-lg flex gap-2 font-semibold text-lg hover:bg-teal-700 transition'>
        <i className="ri-add-line font-semibold text-lg"></i>
        Add Task
      </button>
    </div>
  )
}

export default AddTaskButton 
