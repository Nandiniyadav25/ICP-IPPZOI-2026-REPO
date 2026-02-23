import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks,toggleTask, deleteTask  }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id} 
            title={task.title}
            due={task.due}
            priority={task.priority}
            completed={task.completed}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
