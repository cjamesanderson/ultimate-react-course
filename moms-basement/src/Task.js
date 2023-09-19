export default function Task({ task, onChangeSelectedTask }) {
  return (
    <li onClick={() => onChangeSelectedTask(task)} key={task.id}>
      <span>
        <label>{task.name}</label> (
        {new Date(task.creation_date).toLocaleDateString("en-us")})
      </span>
      <p>
        Unpleasantness: {task.unpleasantness} Priority: {task.priority}
      </p>
    </li>
  );
}
