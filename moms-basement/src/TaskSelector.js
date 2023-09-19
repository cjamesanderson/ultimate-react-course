import TaskList from "./TaskList";
import SelectedTask from "./SelectedTask";

export const initialTasks = [
  {
    name: "clean toilet",
    id: 1,
    creation_date: "5-10-23",
    completed: false,
    minutes_logged: 0,
    unpleasantness: 5,
    priority: 5,
  },
  {
    name: "do laundry",
    id: 2,
    creation_date: "5-11-23",
    completed: false,
    minutes_logged: 5,
    unpleasantness: 2,
    priority: 4,
  },
  {
    name: "clean out mom's basement",
    id: 3,
    creation_date: "5-13-23",
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
}) {
  return (
    <>
      <div className="task-selector">
        <TaskList tasks={tasks} onChangeSelectedTask={onChangeSelectedTask} />
        <SelectedTask task={currentSelectedTask} onUpdateTask={onUpdateTask} />
      </div>
      <div className="sort-controls">
        <form>
          <label>Sort By: </label>
          <select>
            <option value="unpleasantness">Unpleasantness</option>
            <option value="priority">Priority</option>
            <option value="age">Age</option>
          </select>
        </form>
      </div>
    </>
  );
}
