import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const {isAuthenticated, logout, user} = useAuth();
  console.log(user);

  return (
    <nav className="bg-zinc-600/50 backdrop-blur-0  py-4 px-5 flex justify-between items-center">
      <Link to={isAuthenticated ? "/birthdays" : "/"}><h1 className="font-bold">FELICITA.ME</h1></Link>
      <ul className="flex gap-x-2">
        {
          isAuthenticated ? (
            <>
              <li>Bienvenid@ <span className="font-bold">{user.username}</span></li>
              <li><Link to="/add-birthday">Añadir cumpleaños</Link></li>
              <li><Link to="/" onClick={() => {logout();}}>Cerrar sesión</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/register">Registrarse</Link></li>
            </>
          )
        }
      </ul>
    </nav>
  );
}

export default Navbar;