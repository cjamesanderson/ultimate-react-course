import { useState } from "react";

export default function AddTaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [unpleasantness, setUnpleasantness] = useState(1);
  const [priority, setPriority] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (taskName === "") return;

    const newTask = {
      name: taskName,
      id: crypto.randomUUID(),
      creation_date: Date.now(),
      completed: false,
      minutes_logged: 0,
      unpleasantness: unpleasantness,
      priority: priority,
    };

    onAddTask(newTask);

    setTaskName("");
    setUnpleasantness(1);
    setPriority(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>Task: </label>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      ></input>

      <label>Unpleasantness: </label>
      <select
        value={unpleasantness}
        onChange={(e) => setUnpleasantness(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((key) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>

      <label>Priority: </label>
      <select
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((key) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>
      <button>Add</button>
    </form>
  );
}
