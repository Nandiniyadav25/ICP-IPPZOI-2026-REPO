import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks,toggleTask, deleteTask,darkMode , onEdit  }) => {
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
