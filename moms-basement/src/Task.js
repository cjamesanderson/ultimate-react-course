export default function Task({task}) {
    return <li key={task.id}>
        <span><label>{task.name}</label> ({task.creation_date})</span>
        <p>Unpleasantness: {task.unpleasantness} Priority: {task.priority}</p>
    </li>
}