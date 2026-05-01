import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Layout from "../layout";

import Minesweeper from "../pages/Minesweeper";

//------------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="minesweeper" replace /> },
      {
        path: "/minesweeper",
        element: <Minesweeper />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
