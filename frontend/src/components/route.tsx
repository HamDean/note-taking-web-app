import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ArchivePage from "../pages/ArchivePage";
import TagsPage from "../pages/TagsPage";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/:note?',
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/archived",
        element: <ArchivePage />,
      },
      {
        path: "/tags",
        element: <TagsPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
