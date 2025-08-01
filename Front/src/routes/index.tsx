import { createBrowserRouter } from "react-router-dom";
import AnimatedRoutes from "../components/AnimatedRoutes";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <AnimatedRoutes />, 
    errorElement: <NotFound />,  
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
