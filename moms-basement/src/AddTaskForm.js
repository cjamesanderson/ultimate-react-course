export default function AddTaskForm() {
    return (
        <form className="add-form">
            <label>Task: </label>
            <input type="text"></input>

            <label>Unpleasantness: </label>
            <select>
                {Array.from({length: 10}, (_, i) => i + 1).map((key =>
                    <option value={key} key={key}>{key}</option>))}
            </select>
            
            <label>Priority: </label>
            <select>
                {Array.from({length: 5}, (_, i) => i + 1).map((key =>
                    <option value={key} key={key}>{key}</option>))}
            </select>
            <button>Add</button>
        </form>
    );
}