import Task from "./Task";
import {initialTasks} from "./TaskSelector"


export default function TaskList() {
    return (<ul className="task-list">
        {initialTasks.map((task) => (
            <Task task={task} />
        ))}
    </ul>);
}