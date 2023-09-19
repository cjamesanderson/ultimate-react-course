import AddTaskForm from "./AddTaskForm.js";
import Title from "./Title.js";
import TaskSelector from "./TaskSelector.js";
import { initialTasks } from "./TaskSelector.js";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [currentSelectedTask, setCurrentSelectedTask] = useState(
    initialTasks[0]
  );

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

  return (
    <>
      <Title />
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskSelector
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        currentSelectedTask={currentSelectedTask}
        onChangeSelectedTask={handleChangeSelectedTask}
      />
    </>
  );
}
