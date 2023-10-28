import ListItem from "./ListItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (!tasks || tasks.length === 0) {
    return <p>"No Task yet"</p>;
  }
  return (
    <div className="task-list">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ListItem key={task.id} task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
