export default function Task({ task, onChangeSelectedTask, onDeleteTask }) {
  return (
    <li onClick={() => onChangeSelectedTask(task)} key={task.id}>
      <div className="task">
        <div className="task-info">
          <span>
            <label>{task.name}</label> (
            {new Date(task.creation_date).toLocaleDateString("en-us")})
          </span>
          <p>
            Unpleasantness: {task.unpleasantness} Priority: {task.priority}
          </p>
        </div>
        <div className="delete-task" onClick={() => onDeleteTask(task)}>
          X
        </div>
      </div>
    </li>
  );
}
