import { useSelector } from "react-redux/es/exports";
import { selectTask } from "../store/tasks/selectors";

const TaskList = () => {
    const tasksData = useSelector(selectTask);
    return(<div> <p> Maximum amount of tasks: {tasksData.maxTasks}</p>
    <p> Show completed tasks: {tasksData.showCompletedTasks}</p>
        {tasksData.tasks.map(task => <li> {task.task}, Completed: {task.completed? "yes" : "no"}</li>)}
    </div>)
}

export default TaskList