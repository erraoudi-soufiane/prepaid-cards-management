import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import ManageCards from "./ManageCards";
import CreateCards from "./CreateCards";
import Layout from "./Layout";
import Card from "./Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "manageCards", element: <ManageCards /> },
      { path: "dashboard/Card", element: <Card /> },
      { path: "createCards", element: <CreateCards /> },
      { path: "manageCards/card", element: <Dashboard /> },
    ],
  },
]);
export default router;
