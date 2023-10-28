import React from "react";
import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const { addTask, taskEdit, updateTask } = useContext(TaskContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (taskEdit.edit === true) {
      setbtnDisabled(false);
      setText(taskEdit.item.description);
      setRating(taskEdit.item.rating);
    }
  }, [taskEdit]);

  const handleTaskChange = (e) => {
    if (e.target.value === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (e.target.value.trim().length < 10) {
      setbtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newTask = {
        rating,
        description: text,
      };
      if (taskEdit.edit === true) {
        newTask.id = taskEdit.item.id;
        updateTask(newTask);
      } else {
        addTask(newTask);
      }
      setText("");
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>On a scale of 0-10, what is the priority of the task</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input">
          <input
            onChange={handleTaskChange}
            type="text"
            placeholder="Enter task here"
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default TaskForm;
