import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    
    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
           <h1 className=" text-2xl font-bold">Organizador de tareas</h1>
            <ul className=" flex gap-x-2">
                {isAuthenticated ? (
                <>  
                    <li>
                        <Link to={'/'} className=" bg-indigo-500 px-4 py-1 rounded-sm ">Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/add-task'} className=" bg-indigo-500 px-4 py-1 rounded-sm ">Agregar una tarea</Link>
                    </li>
                    <li>
                        <Link to={'/tasks'} className=" bg-indigo-500 px-4 py-1 rounded-sm ">Mis tareas</Link>
                    </li>
                    <li>
                        Perfil de {user.username}
                    </li>
                    <li>
                        <Link to={'/'}onClick={() => {logout()}} className=" bg-indigo-500 px-4 py-1 rounded-sm ">Logout</Link>
                    </li>
                    
                </>
                ) : (
                    <>  
                    <li>
                        <Link to={'/login'} className=" bg-indigo-500 px-4 py-1 rounded-sm ">Inicia Sesion</Link>
                    </li>
                    <li>
                        <Link to={'/register'} className=" bg-indigo-500 px-4 py-1 rounded-sm ">Registraste</Link>
                    </li>
                </> 
                )}
            </ul>
        </nav>

  )
}

export default Navbar