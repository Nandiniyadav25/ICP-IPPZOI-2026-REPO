import { useState } from "react"
import AddTaskButton from "../Components/AddTaskButton"
import AddTaskForm from "../Components/AddTaskForm"
import Navbar from "../Components/Navbar"
import TaskFilter from "../Components/TaskFilter"
import TaskList from "../Components/TaskList"


const Home = () => {
  const [tasks, setTasks] = useState([
  {
    id: 1,
    title: "Design Landing Page",
    due: "Tomorrow",
    priority: "High",
    completed: false
  },
  {
    id: 2,
    title: "Fix Navbar UI",
    due: "Today",
    priority: "Medium",
    completed: false
  }
]);
const [showForm, setShowForm] = useState(false);
const [filter, setFilter] = useState("all");
const addTask = (newTask) => {
  setTasks([...tasks, newTask]);
};
const toggleTask = (id) => {
  setTasks(tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  ));
};
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};
const filteredTasks = tasks.filter(task => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
});

  return (
    <>
      <Navbar/>
      <main className="bg-teal-50 min-h-screen">
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <AddTaskButton onClick={() => setShowForm(true)}  />
      {showForm && <AddTaskForm onClose={() => setShowForm(false)} onAdd={addTask} />}
      </main>
     
    </>
  )
}

export default Home
