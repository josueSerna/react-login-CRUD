import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom";

import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
dayjs.extend(utc)

function TaskCard({ task }) {

    const {deleteTask} = useTasks()

  return (
    <div className=" bg-zinc-800 max-w-md wfull p-10 rounded-md my-2">
    <h1 className="text-2xl font-bold">{task.title}</h1>
    <p className="text-slate-300">{task.description}</p>
    <div>
        <Link to={`/tasks/${task._id}`} className=" bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md mx-2 ">Editar</Link>
        <button className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() =>{deleteTask(task._id)}}>Borrar</button>
    </div>
    <p>{dayjs(task.date).utc().format("DD-MM-YYYY")}</p>
  </div>
  )
}

export default TaskCard