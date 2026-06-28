import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import NotesLayout from "../NotesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <NotesLayout />
      }
    ]
  },
]);

export default router;
