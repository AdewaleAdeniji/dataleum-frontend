import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import FormPage from "../pages/customer";
import OTPPage from "../pages/customer/OtpPage";
import AdminPage from "../pages/admin";
import Landing from "../pages/customer/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormPage />,
  },
  {
    path: ":phone/otp-code",
    element: <OTPPage />,
  },
  {
    path: `/manage/:key`,
    element: <AdminPage />,
  },
  {
    path: "/website",
    element: <Landing />,
  },
]);
export default router;
