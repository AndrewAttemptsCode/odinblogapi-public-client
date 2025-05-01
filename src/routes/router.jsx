import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import BlogPage from "../pages/BlogPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <BlogPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ]
  },
]);

export default routes;