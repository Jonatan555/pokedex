import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { SearchPage } from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/", element: <Details /> },
      { path: "/", element: <SearchPage /> },
    ],
  },
]);

export function APPRoutes() {
  return <RouterProvider router={router} />;
}
