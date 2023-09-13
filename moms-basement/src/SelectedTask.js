export default function SelectedTask({task}) {
    return (
        <div className="selected-task">
            <form>
            <h3>{task.name}</h3>
            <p>Past effort: {task.minutes_logged}</p>
            <p>Effort made: <input type="text"></input></p>
            <p>Finished? <input type="checkbox"></input></p>
            <button>Submit</button>
</form>
        </div>
    )
}