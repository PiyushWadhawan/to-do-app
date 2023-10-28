import React from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskStats() {
  const { tasks } = useContext(TaskContext);

  let high = 0,
    mod = 0,
    low = 0;
  tasks.map((task) => {
    if (task.rating < 4) low += 1;
    else if (task.rating < 8) mod += 1;
    else high += 1;
    return "";
  });

  return (
    <div className="stats">
      <h2>Total Task: {tasks.length}</h2>
      <div className="task-priority">
        Task Priority: <span className="high">high:</span> {high}{" "}
        <span className="moderate">moderate:</span> {mod}{" "}
        <span className="low">low:</span> {low}
      </div>
    </div>
  );
}

export default TaskStats;
