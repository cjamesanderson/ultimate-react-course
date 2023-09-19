import TaskList from "./TaskList";
import SelectedTask from "./SelectedTask";
import { useState } from "react";

export const initialTasks = [
  {
    name: "clean toilet",
    id: 1,
    creation_date: new Date("5-10-23").getTime(),
    completed: false,
    minutes_logged: 0,
    unpleasantness: 5,
    priority: 5,
  },
  {
    name: "do laundry",
    id: 2,
    creation_date: new Date("5-11-23").getTime(),
    completed: false,
    minutes_logged: 5,
    unpleasantness: 2,
    priority: 4,
  },
  {
    name: "clean out mom's basement",
    id: 3,
    creation_date: new Date("5-13-23").getTime(),
    completed: false,
    minutes_logged: 50,
    unpleasantness: 9,
    priority: 1,
  },
];

export default function TaskSelector({
  tasks,
  onUpdateTask,
  currentSelectedTask,
  onChangeSelectedTask,
  onAddTaskMinutes,
}) {
  const [sortBy, setSortBy] = useState("unpleasantness");

  let sortedTasks = tasks;

  if (sortBy === "unpleasantness")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(b.unpleasantness) - Number(a.unpleasantness));

  if (sortBy === "priority")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(b.priority) - Number(a.priority));

  if (sortBy === "age")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(b.creation_date) - Number(a.creation_date));

  if (sortBy === "name")
    sortedTasks = tasks.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="task-selector">
        <TaskList
          tasks={sortedTasks}
          onChangeSelectedTask={onChangeSelectedTask}
          taskOrder={sortBy}
        />
        <SelectedTask
          task={currentSelectedTask}
          onUpdateTask={onUpdateTask}
          onAddTaskMinutes={onAddTaskMinutes}
        />
      </div>
      <div className="sort-controls">
        <form>
          <label>Sort By: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="unpleasantness">Unpleasantness</option>
            <option value="priority">Priority</option>
            <option value="age">Age</option>
            <option value="name">Name</option>
          </select>
        </form>
      </div>
    </>
  );
}
