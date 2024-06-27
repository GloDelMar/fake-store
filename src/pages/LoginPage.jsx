import { toast } from "sonner"
import { login } from "../api"
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import clsx from "clsx";
import { useState } from "react";



export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    

    const {
        handleSubmit,
        register,
        formState: { errors },
        setError,
    } = useForm()

    async function onSubmit(data) {
       try {
        const token = await login(data.username, data.password)

        if (token) {
            window.localStorage.setItem('token', token)
        toast.success('Bienvenido')
        navigate('/productos')
        } else {
            toast.error('Usuario o contraseña incorrectos')
            setError('root.credentials', { 
                type: "manual", 
                message: "Credenciales invalidas"
            })
        }
       } catch (error) {
        toast.error('Error al iniciar sesion')
        console.error('[login error]', error);
       }
    }

    function handleShowHidePasword() {
        setShowPassword(!showPassword)
    }

    return (
        <main className=" flex justify-center items-center flex-col w-full min-h-dvh gap-4 ">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <form className={clsx("border border-white/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full", 
            {
                'border-red-500': errors.root?.credentials,
            })} onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="text"
            className=" border border-white/50 rounded p-2 text-black" 
            placeholder="Nombre de usuario" 
            {...register('username', {
                required: { value: true, message: 'El nombre de usuario requerido'}
            })}
            />
            <input 
            type={showPassword ? "text" : "password"} 
            className=" border border-white/50 rounded p-2 text-black"
            placeholder="Contraseña" 
            {...register('password', {
                required: { value: true, message: 'Contraseña requerida'},
            })} />
            <span 
            className="text-xs text-white/50 cursor-pointer hover:text-white"
            onClick={handleShowHidePasword}>
                { showPassword ? "🙈 Ocultar" : "🐵 Mostrar"} password
                </span>
            <button className="bg-teal-500 p-4 text-black hover:bg-teal-300 rounded">Ingresar</button>
            {
               errors.root?.credentials && <p className="text-red-500 text-center">Credenciales invalidas</p> 
            }
        </form>
        </main>
    )
}