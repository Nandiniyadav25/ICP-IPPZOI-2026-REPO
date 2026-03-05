import { useState,useEffect } from "react";
import AddTaskButton from "../Components/AddTaskButton";
import AddTaskForm from "../Components/AddTaskForm";
import Navbar from "../Components/Navbar";
import TaskFilter from "../Components/TaskFilter";
import TaskList from "../Components/TaskList";

const Home = () => {
 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [serachTask, setSearchTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editTask, setEditTask] = useState(null);

  // LOAD from localStorage


// SAVE to localStorage
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

 const addTask = (taskData) => {

  if (editTask) {
    // EDIT MODE
    setTasks(tasks.map(task =>
      task.id === editTask.id
        ? taskData   // replace
        : task
    ));
    setEditTask(null);
  } else {
    // ADD MODE
    setTasks([...tasks, taskData]);
  }
};
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed" && !task.completed) return false;
    if (filter === "pending" && task.completed) return false;

    if (!task.title.toLowerCase().includes(serachTask.toLowerCase()))
      return false;
    return true;
  });

  const handleEdit = (task) => {
    setEditTask(task);
    setShowForm(true);
  };

  return (
    <>
      <Navbar totalTasks={tasks.length} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main
        className={`${darkMode ? "bg-gray-900 text-white" : "bg-teal-50"} min-h-screen`}
      >
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          serachTask={serachTask}
          setSearchTask={setSearchTask}
        />
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          darkMode={darkMode}
          onEdit={handleEdit}
        />
        <AddTaskButton onClick={() => setShowForm(true)} />
        {showForm && (
          <AddTaskForm
            onClose={() => setShowForm(false)}
            onAdd={addTask}
            darkMode={darkMode}
            editTask={editTask}
          />
        )}
      </main>
    </>
  );
};

export default Home;
