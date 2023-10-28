import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      rating: 9,
      description: "Get groceries for dinner",
    },
    {
      id: 2,
      rating: 5,
      description: "Pay rent next friday",
    },
    {
      id: 3,
      rating: 2,
      description: "Attend club meeting wednesday",
    },
  ]);

  const [taskEdit, setTaskEdit] = useState({
    item: {},
    edit: false,
  });

  const addTask = (newTask) => {
    newTask.id = uuidv4();
    setTask([newTask, ...tasks]);
  };

  const editTask = (item) => {
    setTaskEdit({
      item: item,
      edit: true,
    });
  };

  const updateTask = (newTask) => {
    let updatedTask = tasks.map((task) => {
      if (task.id === newTask.id) {
        task = newTask;
      }
      return task;
    });
    setTask(updatedTask);
    setTaskEdit({ item: {}, edit: false });
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task")) {
      setTask(
        tasks.filter((task) => {
          return task.id !== id;
        })
      );
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        taskEdit: taskEdit,
        addTask: addTask,
        editTask: editTask,
        updateTask: updateTask,
        deleteTask: deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
