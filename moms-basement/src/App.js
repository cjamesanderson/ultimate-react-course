import AddTaskForm from "./AddTaskForm.js";
import Title from "./Title.js";
import TaskSelector from "./TaskSelector.js";
import { initialTasks } from "./TaskSelector.js";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(task) {
    setTasks([...tasks, task]);

    console.log(task);
  }

  return (
    <>
      <Title />
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskSelector tasks={tasks} />
    </>
  );
}
