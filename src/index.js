
import ReactDOM from 'react-dom/client';
import App from './App';
// import Landing from './landing-page/landing';
import Login from './login/login';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Landing from './landing-page/landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);