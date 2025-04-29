import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import BlogPage from "../pages/BlogPage";
import LoginPage from "../pages/LoginPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <BlogPage /> },
      { path: '/login', element: <LoginPage /> },
    ]
  },
]);

export default routes;