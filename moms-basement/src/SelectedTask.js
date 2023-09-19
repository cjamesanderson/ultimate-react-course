import { useState } from "react";

export default function SelectedTask({ task, onUpdateTask }) {
  const [effort, setEffort] = useState("");
  const [finished, setFinished] = useState(task.completed);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateTask(task, task.minutes_logged + effort, finished);
    setEffort(0);
  }

  return (
    <div className="selected-task">
      <form onSubmit={handleSubmit}>
        <h3>{task.name}</h3>
        <p>Past effort: {task.minutes_logged}</p>
        <p>
          Effort made:{" "}
          <input
            type="text"
            value={effort}
            onChange={(e) => setEffort(Number(e.target.value))}
          ></input>
        </p>
        <p>
          Finished?{" "}
          {task.completed ? (
            <input
              type="checkbox"
              onChange={(e) => setFinished(e.target.checked)}
              checked
            ></input>
          ) : (
            <input
              type="checkbox"
              onChange={(e) => setFinished(e.target.checked)}
            ></input>
          )}
        </p>
        <button>Update</button>
      </form>
    </div>
  );
}
