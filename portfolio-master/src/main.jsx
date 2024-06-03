import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Write from './Routes/Write';
import List from './Routes/List';
import MainPage from './components/main';
import Login from "./Routes/Login";
import { CookiesProvider } from "react-cookie";


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
    },
    {
      path: "logins",
      element: <Login/>,
    }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);