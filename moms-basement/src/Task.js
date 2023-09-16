export default function Task({ task, onChangeSelectedTask }) {
  return (
    <li onClick={() => onChangeSelectedTask(task)} key={task.id}>
      <span>
        <label>{task.name}</label> ({task.creation_date})
      </span>
      <p>
        Unpleasantness: {task.unpleasantness} Priority: {task.priority}
      </p>
    </li>
  );
}
