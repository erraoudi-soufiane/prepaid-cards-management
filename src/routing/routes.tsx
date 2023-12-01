import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import ManageCards from "./ManageCards";
import CreateCards from "./CreateCards";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "manageCards", element: <ManageCards /> },
      { path: "createCard", element: <CreateCards /> },
      { path: "manageCards/card", element: <Dashboard /> },
    ],
  },
]);
export default router;
