# ICP-IPPZOI-2026-REPO

# Task Manager App (React)

A simple and interactive Task Manager built using React.  
This app helps users manage their daily tasks efficiently with features like adding, editing, deleting, searching, and filtering tasks.



## Features

- Add new tasks with due date and priority
- Edit existing tasks
- Delete tasks with confirmation
- Mark tasks as completed
- Search tasks instantly
- Filter tasks (All / Pending / Completed)
- Dark Mode support
- LocalStorage integration (tasks stay after refresh)



## Tech Stack

- React.js
- JavaScript (ES6)
- Tailwind CSS
- React Hooks (useState, useEffect)



## Approach

The project is built using a **component-based architecture**.

Main components used:

- **Navbar** → Displays app title, task count, and dark mode toggle
- **TaskFilter** → Handles filtering and searching tasks
- **TaskList** → Displays all filtered tasks
- **TaskItem** → Individual task UI
- **AddTaskForm** → Modal form to add or edit tasks
- **AddTaskButton** → Button to open the form

State management is handled in the **Home component**, which stores the task list and passes data through props.

Filtering and searching logic is applied before rendering tasks.

LocalStorage is used to persist tasks so they remain even after page refresh.



## What I Learned

Through building this project I learned:

- React component structure
- Managing state using **useState**
- Using **useEffect** for LocalStorage
- Passing data using **props**
- Handling user input and forms
- Implementing search and filter logic
- Conditional rendering in React
- Dark mode implementation
- Building reusable UI components

---

##  Future Improvements

- Add task categories
- Backend integration
- User authentication
- Task reminders

## 👩‍💻 Author

Nandini Yadav  
BCA Student | Learning Web Development