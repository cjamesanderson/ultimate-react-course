import Task from "./Task";

export default function TaskList({ tasks, onChangeSelectedTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.name}
          onChangeSelectedTask={onChangeSelectedTask}
        />
      ))}
    </ul>
  );
}
