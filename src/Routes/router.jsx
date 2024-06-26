import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard";
import AllReviews from "../Pages/AllReviews";
import AddReviews from "../Pages/AddReviews";
import EditReview from "../Pages/EditReview";
import SingleDetails from "../Pages/SingleDetails";
import EditProfile from "../Pages/EditProfile";
import AllBooks from "../Pages/AllBooks";
import ReviewsAll from "../Pages/ReviewsAll";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/books/:id",
        element: <SingleDetails />,
        loader: ({ params }) =>
          fetch(
            `https://book-review-server.vercel.app/books/${params.id}`
          ),
      },
      {
        path: "/allbooks",
        element : <AllBooks />
      },
      {
        path: "/allreviews",
        element : <ReviewsAll />
      },
      {
        path: "login",
        element: <SignIn />
      },
      {
        path: "registration",
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
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRouter>
            <EditProfile />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://book-review-server.vercel.app/user/get/${params.id}`
          ),
      },
      {
        path: "all-reviews",
        element: (
          <PrivateRouter>
            <AllReviews />
          </PrivateRouter>
        )
      },
      {
        path: "add",
        element: (
          <PrivateRouter>
            <AddReviews />
          </PrivateRouter>
        )
      },
      {
        path: "all-reviews/edit/:id",
        element: (
          <PrivateRouter>
            <EditReview />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://book-review-server.vercel.app/books/${params.id}`),
      },

    ]
  }
]);