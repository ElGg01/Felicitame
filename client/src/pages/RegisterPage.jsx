import { useForm } from "react-hook-form";
import "../assets/css/RegisterPage.css";
// import Cake from '../assets/img/birthday-cake.png';
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/birthdays");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singup(values);
  });

  return (
    <div className="relative home">
      <div className="absolute w-full h-full flex justify-center items-center overflow-hidden -z-10">
        <div className="gradient -z-10 top-2/4 left-2/4"></div>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div>
          <h1 className="text-center text-4xl my-4 font-bold titulo">
            FELICITA.ME
          </h1>
          <div className="bg-zinc-500/60 w-full px-4 py-4 backdrop-blur-0 rounded">
            <h1 className="text-center my-2 font-bold">REGISTRATE:</h1>
            {registerErrors.map((error, i) => {
              return (
                <div className="bg-red-500 p-2" key={i}>
                  {error}
                </div>
              );
            })}
            <form onSubmit={onSubmit}>
              <input
                type="text"
                {...register("username", { required: true })}
                placeholder="Nombre de usuario"
                className="w-full bg-zinc-700 px-4 py-2 my-2"
              />
              {errors.username && (
                <p className="text-red-400">
                  El <span className="font-bold">nombre de usuario</span> es{" "}
                  <span className="font-bold">requerido</span>
                </p>
              )}
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Correo"
                className="w-full bg-zinc-700 px-4 py-2 my-2"
              />
              {errors.email && (
                <p className="text-red-400">
                  El <span className="font-bold">correo</span> es{" "}
                  <span className="font-bold">requerido</span>
                </p>
              )}
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Contraseña"
                className="w-full bg-zinc-700 px-4 py-2 my-2"
              />
              {errors.password && (
                <p className="text-red-400">
                  La <span className="font-bold">contraseña</span> es{" "}
                  <span className="font-bold">requerida</span>
                </p>
              )}
              <button
                type="submit"
                className="w-full cursor-pointer bg-pink-700 py-2 my-2 hover:bg-pink-800"
              >
                Registrarse
              </button>
            </form>
            <div className='flex justify-end'>
              <Link to="/login">
                <p className="text-right underline cursor-pointer">
                  ¿Ya tienes cuenta?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
