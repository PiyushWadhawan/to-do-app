import Card from "./shared/Card";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function ListItem({ task }) {
  const { editTask, deleteTask } = useContext(TaskContext);

  const editOnClick = (task) => {
    editTask(task);
  };

  return (
    <Card paddingAlt={true} rating={task.rating}>
      <div
        className="rating"
        style={{
          backgroundColor:
            task.rating < 4 && task.rating >= 0
              ? "orange"
              : task.rating < 8
              ? "green"
              : "red",
        }}
      >
        {task.rating}
      </div>
      <div className="task">{task.description}</div>
      <div className="buttons">
        <button className="edit" onClick={() => editOnClick(task)}>
          <BiSolidMessageSquareEdit className="icon" />
        </button>
        <button className="close" onClick={() => deleteTask(task.id)}>
          <TiDeleteOutline className="icon" />
        </button>
      </div>
    </Card>
  );
}

export default ListItem;
