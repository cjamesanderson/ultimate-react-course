import Task from "./Task";

export default function TaskList({
  tasks,
  onChangeSelectedTask,
  onDeleteTask,
}) {
  if (!tasks.length)
    return <p>Nothing here yet! Create some tasks to get started</p>;
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.name}
          onChangeSelectedTask={onChangeSelectedTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
