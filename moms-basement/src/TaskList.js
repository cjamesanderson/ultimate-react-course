import Task from "./Task";

export default function TaskList({
  tasks,
  onChangeSelectedTask,
  onDeleteTask,
}) {
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
