import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <div className="text-center mt-20 text-red-500">Página não encontrada.</div>,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <div className="text-center mt-20 text-red-500">Página não encontrada.</div>,
  },
  {
    path: "/",
    element: <div className="text-center mt-20">Página inicial (teste)</div>,
  }
]);

export default router;
