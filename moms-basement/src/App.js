import AddTaskForm from "./AddTaskForm.js";
import Title from "./Title.js";
import TaskSelector from "./TaskSelector.js";
import { useState } from "react";
import Footer from "./Footer.js";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [currentSelectedTask, setCurrentSelectedTask] = useState(null);
  const [taskMinutes, setTaskMinutes] = useState(0);

  function handleAddTask(task) {
    setTasks((curr) => [...curr, task]);

    console.log(task);
  }

  function handleUpdateTask(task, new_minutes_logged, new_completed) {
    // console.log(id, new_minutes_logged, new_finished);
    const updatedTask = {
      ...task,
      minutes_logged: new_minutes_logged,
      completed: new_completed,
    };
    console.log(updatedTask);
    setTasks((curr) =>
      curr.map((currTask) => (currTask.id === task.id ? updatedTask : currTask))
    );
    setCurrentSelectedTask(updatedTask);
    // console.log(tasks.find((task) => task.id === id));
  }

  function handleChangeSelectedTask(task) {
    setCurrentSelectedTask(task);
  }

  function handleAddTaskMinutes(minutes, unpleasantness) {
    console.log(minutes, unpleasantness);
    setTaskMinutes((curr) => curr + minutes * unpleasantness);
  }

  function handleDeleteTask(target) {
    if (
      window.confirm(
        'Are you sure you want to delete task "' + target.name + '"?'
      )
    )
      setTasks((curr) => curr.filter((task) => task.id !== target.id));
  }
  return (
    <>
      <Title />
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskSelector
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        currentSelectedTask={currentSelectedTask}
        onChangeSelectedTask={handleChangeSelectedTask}
        onAddTaskMinutes={handleAddTaskMinutes}
        onDeleteTask={handleDeleteTask}
      />
      <Footer taskMinutes={taskMinutes} />
    </>
  );
}
