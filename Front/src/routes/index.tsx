import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    errorElement: <div className="text-center mt-20 text-red-500">Página não encontrada.</div>, // opcional
  },
  {
    path: "/",
    element: <div className="text-center mt-20">Página inicial (placeholder)</div>, // temp
  }
]);

export default router;
