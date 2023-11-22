// import Cake from '../assets/img/birthday-cake.png';
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const {signin, errors: signinErrors, isAuthenticated} = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(data => {
    signin(data);
  });

  useEffect(() => {
    if(isAuthenticated) navigate("/birthdays");
  }, [isAuthenticated]);
  
  return (
    <div className='flex justify-center items-center h-screen relative backdrop-blur-0 bg-neutral-900/50'>
      <div className="night-background blur-2xl opacity-10 absolute top-0 -z-10 w-full h-full rounded"></div>
      <div>
        <img src="https://res.cloudinary.com/dgzivrbtk/image/upload/v1700613290/Felicitame/enmobb2pdhh3kyj0yrn6.png" className='w-1/4 sm:w-1/5 block mx-auto'/>
        <h1 className='text-center text-4xl my-4 font-bold'>FELICITA.ME</h1>
        <div className='bg-zinc-500/60 px-4 py-4 mx-2 backdrop-blur-0 rounded'>
          <h1 className='text-center my-2 font-bold'>INICIA SESIÓN:</h1>
          {
            signinErrors.map((error, i) => {
              console.log(error);
              return <div className='bg-red-500 p-2' key={i}>{error}</div>
            })
          }
          <form onSubmit={onSubmit}>
            <input type="email" {...register("email", {required: true})} placeholder='Correo' className='w-full bg-zinc-700 px-4 py-2 my-2'/>
            {
              errors.email && (
                <p className='text-red-400'>El <span className='font-bold'>correo</span> es <span className='font-bold'>requerido</span></p>
              )
            }
            <input type="password" {...register("password", {required: true})} placeholder='Contraseña' className='w-full bg-zinc-700 px-4 py-2 my-2'/>
            {
              errors.password && (
                <p className='text-red-400'>La <span className='font-bold'>contraseña</span> es <span className='font-bold'>requerida</span></p>
              )
            }
            <button type="submit" className='w-full cursor-pointer bg-pink-700 py-2 my-2'>Logearse</button>
          </form>
          <Link to="/register"><p className='text-right underline cursor-pointer'>¿No tienes cuenta?</p></Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage