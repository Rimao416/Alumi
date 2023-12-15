import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoutes() {
  const isAuthenticated = useSelector((state) => state.authSlice.user?.user);

  if (isAuthenticated) {
    const role = isAuthenticated.role;

    // En fonction du rôle, redirige vers la route appropriée
    switch (role) {
      case "Admin":
        return <Navigate to="/dashboard" replace />;
      case "Prof":
        return <Navigate to="/route-b" replace />;
      // Ajoutez d'autres cas en fonction des rôles supplémentaires
      default:
        // Redirige vers une route par défaut ou une page d'erreur si le rôle n'est pas géré
        return <Navigate to="/default-route" replace />;
    }
  } else {
    // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/login" replace />;
  }
}

export default PrivateRoutes;
