import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchPage from "../pages/SearchPage";
import LoginMessage from "../pages/LoginMessage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/favourite",
    Component: Favourite,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/error",
    Component: LoginMessage,
  },
]);

export default router;
