import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks,toggleTask, deleteTask,darkMode , onEdit  }) => {
  if (tasks.length === 0) {
  return (
    <p className="text-center mt-10 text-gray-500 font-semibold text-2xl">
      No tasks found
    </p>
  );
}
  return (
    <div>

      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            darkMode={darkMode}
            onEdit={onEdit}

          />
        );
      })}
    </div>
  );
};

export default TaskList;
