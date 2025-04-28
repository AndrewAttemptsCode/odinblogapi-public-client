import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import BlogPage from "../pages/BlogPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <BlogPage /> },
    ]
  },
]);

export default routes;