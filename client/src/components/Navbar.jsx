import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../assets/css/Navbar.css';

function Navbar() {

  const {isAuthenticated, logout, user} = useAuth();
  console.log(user);

  return (
    <nav className="bg-zinc-900/90 backdrop-blur-0 py-4 px-5 flex justify-between items-center sticky top-0 z-10">
      {/* <Link to={isAuthenticated ? "/birthdays" : "/"}><h1 className="font-bold">FELICITA.ME</h1></Link> */}
      {
        isAuthenticated ? (
          <Link to={isAuthenticated ? "/birthdays" : "/"}><h1 className="font-bold text-xs sm:text-base border-b-2">Volver</h1></Link>
        ) : (
          <Link to={isAuthenticated ? "/birthdays" : "/"}><h1 className="font-bold">FELICITA.ME</h1></Link>
        )
      }
      <ul className="flex gap-x-2 text-xs sm:gap-x-2 sm:text-base">
        {
          isAuthenticated ? (
            <>
              <li><span className="align-middle">Hola, <span className="font-bold"> {user.username}</span></span></li>
              {/* <li><Link to="/add-birthday">Añadir cumpleaños</Link></li> */}
              <li className="border-b-2"><Link to="/" onClick={() => {logout();}}>Cerrar sesión</Link></li>
            </>
          ) : (
            <>
              <li className="border-b-2"><Link to="/login">Iniciar sesión</Link></li>
              <li className="border-b-2"><Link to="/register">Registrarse</Link></li>
            </>
          )
        }
      </ul>
    </nav>
  );
}

export default Navbar;