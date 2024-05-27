import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Write from './Routes/Write';
import List from './Routes/List';
import MainPage from './components/main';


/* existing imports */
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [  {
      index: true,
      element: <MainPage />,
    },
    {
      path: "/list",
      element: <List/>,
    },
    {
      path: "/write",
      element: <Write/>,
    } ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);