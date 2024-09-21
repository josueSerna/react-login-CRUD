import { useState } from "react"

const TaskSearch = ({TaskCard}) => {
     const [searchId, setSearchId] = useState('');

     const handleSearch = (event) => {
        setSearchId(event.target.value);
     };

     const filteredTasks = TaskCard.filter((task) =>
        task.id.toString().includes(searchId)
    );
    return(
        <div>
            <input type="text" 
                placeholder="Busca tu tarea"
                value={searchId}
                onChange={handleSearch}
            />
            <ul>
                {filteredTasks.map((task)=>
                <li key={task.id}>
                    ID: {task.id}, Nombre: {task.title}

                </li>
                )}
            </ul>
        </div>
    )
}

export default TaskSearch;