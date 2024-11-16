import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomePage from "../Pages/Homepage/HomePage";
import AllTreatments from "../Pages/Treatments/AllTreatments";
import MyAppointment from "../Pages/Appointment/MyAppointment";
import Profile from "../Pages/Profile/Profile";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/treatments",
        element: <AllTreatments></AllTreatments>,
      },

      {
        path: "/appointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:detailsId",
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

export default router;
