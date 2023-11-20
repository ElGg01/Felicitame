import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

  const {isAuthenticated, loading} = useAuth();

  console.log(loading, isAuthenticated);

  if(loading) return <h1>Cargando...</h1>
  if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>

  return <Outlet />
}

export default ProtectedRoute;