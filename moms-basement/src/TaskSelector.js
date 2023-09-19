import TaskList from "./TaskList";
import SelectedTask from "./SelectedTask";
import { useState } from "react";

export default function TaskSelector({
  tasks,
  onUpdateTask,
  currentSelectedTask,
  onChangeSelectedTask,
  onAddTaskMinutes,
  onDeleteTask,
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
          onDeleteTask={onDeleteTask}
        />
        {currentSelectedTask !== null && (
          <SelectedTask
            task={currentSelectedTask}
            onUpdateTask={onUpdateTask}
            onAddTaskMinutes={onAddTaskMinutes}
          />
        )}
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
