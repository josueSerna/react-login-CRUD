import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


function RegisterPage(){
    
    const {register, handleSubmit, formState:{ errors }, } = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate ("/tasks")
    },[isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
       signup(values);
    }) 


    return (
        <div className='flex h-[calc(100vh-200px)] items-center justify-center'>
           <div className='bg-zinc-800 max-w-md p-5 rounded-md'>
           {
                registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit}>
              <h1 className='text-3xl font-bold my-2'>Registro</h1>
                <input type="text" { ...register('username', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Nombre de usuario'/>

                {
                  errors.username && (
                    <p className='text-red-500'>
                        nombre es requerido
                    </p>
                  )                 
                }


                <input type="email" {...register('email', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Email'/>

                {
                  errors.email && (
                    <p className='text-red-500'>
                        email es requerido
                    </p>
                  )                 
                }

                <input type="password" {...register('password', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Contraseña'/>

                {
                  errors.password && (
                    <p className='text-red-500'>
                        contraseña es requerida
                    </p>
                  )                 
                }

                <button type='submit' className=" bg-indigo-500 px-4 py-1 rounded-sm ">
                    Registrate
                </button>
            </form>
            <p className="flex gap-x-2 justify-between">
                        Ya tienes una cuenta? <Link to='/login' className="text-sky-500"> Inicia Sesion</Link>
                    </p>
           </div>
        </div>
    )
}
export default RegisterPage