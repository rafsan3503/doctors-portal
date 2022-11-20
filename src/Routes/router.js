import { createBrowserRouter } from "react-router-dom";
import Auth from "../Layouts/Auth";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import Appointment from "../Pages/Appointment/Appointmnet/Appointment";
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../Pages/DashBoard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorElement from "../Pages/Shared/ErrorElement/ErrorElement";
import SignUp from "../Pages/SIgnUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Auth />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
