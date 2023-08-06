import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import FormPage from "../pages/customer";
import OTPPage from "../pages/customer/OtpPage";
import AdminPage from "../pages/admin";
import Landing from "../pages/customer/landing";
import SetupOTP from "../pages/customer/newOTP";
import NewLandingPage from "../pages/customer/newLanding";

const router = createBrowserRouter([
  {
    path: "/old-page",
    element: <FormPage />,
  },
  {
    path: ":phone/otp-code",
    element: <SetupOTP />,
  },
  {
    path: "/old/:phone/otp-code",
    element: <OTPPage />,
  },
  {
    path: `/manage/:key`,
    element: <AdminPage />,
  },
  {
    path: "/website",
    element: <NewLandingPage />,
  },
  {
    path: "/",
    element: <Landing />,
  },
]);
export default router;
