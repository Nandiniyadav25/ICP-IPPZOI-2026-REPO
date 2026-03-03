import { useState } from "react";
import AddTaskButton from "../Components/AddTaskButton";
import AddTaskForm from "../Components/AddTaskForm";
import Navbar from "../Components/Navbar";
import TaskFilter from "../Components/TaskFilter";
import TaskList from "../Components/TaskList";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Landing Page",
      due: "Tomorrow",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Fix Navbar UI",
      due: "Today",
      priority: "Medium",
      completed: false,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [serachTask, setSearchTask] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [editTask, setEditTask] = useState(null);

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
