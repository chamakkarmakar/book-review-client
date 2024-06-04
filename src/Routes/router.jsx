import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children : [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <SignIn />
        },
        {
          path: "/registration",
          element: <SignUp />
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
          {
              path: "/dashboard",
              element: (
                  <PrivateRouter>
                      <Dashboard />
                  </PrivateRouter>
              ),
          },
        ]
    }
  ]);