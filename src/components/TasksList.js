import { useSelector } from "react-redux/es/exports";
import { selectTask } from "../store/tasks/selectors";
import AddTaskForm from "./AddTaskForm";
import { deleteTask, toggleCompleted } from "../store/tasks/slice";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasksData = useSelector(selectTask);
  const [completed, setCompleted] = useState(false)
  console.log("list of tasks:", tasksData.tasks);
  return (
    <div>
      {" "}
      <p> Maximum amount of tasks: {tasksData.maxTasks}</p>
      <p> Show completed tasks: {tasksData.showCompletedTasks}</p>
     
      {tasksData.tasks.map((task) => (
        <li>
          {" "}
          {task.task}, Completed: <button onClick={() => dispatch(toggleCompleted(task.id))}>{task.completed? "Yes" : "No"} </button>
          <button onClick={() => dispatch(deleteTask(task.id))}> Delete the task</button>
        </li>
      ))}
      <div>
        {" "}
       { tasksData.tasks.length < tasksData.maxTasks? <AddTaskForm /> : "No task can be added!" } 
      </div>{" "}
    </div>
  );
};

export default TaskList;

 //tasksData.showCompletedTasks? ... : tasksData.task.filter(i => i.completed === false)