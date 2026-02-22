
import AddTaskButton from "../Components/AddTaskButton"
import AddTaskForm from "../Components/AddTaskForm"
import Navbar from "../Components/Navbar"
import TaskFilter from "../Components/TaskFilter"
import TaskList from "../Components/TaskList"

const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="bg-teal-50 min-h-screen">
      <TaskFilter/>
      <TaskList/>
      <AddTaskButton/>
      {/* <AddTaskForm/> */}
      </main>
     
    </>
  )
}

export default Home
