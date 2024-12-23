import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import HomePage from "../Pages/Homepage/HomePage";
import AllTreatments from "../Pages/Treatments/AllTreatments";
import MyAppointment from "../Pages/Appointment/MyAppointment";
import Profile from "../Pages/Profile/Profile";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import LoginPages from "../Pages/Authpages/LoginPages";
import RegisterPage from "../Pages/Authpages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "treatments",
        element: <AllTreatments></AllTreatments>,
      },

      {
        path: "appointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "details/:detailsId",
        element: (
          <PrivateRoutes>
            <DetailsPage></DetailsPage>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const response = await fetch("/service.json");
          const data = await response.json();
          const singleData = data.find((item) => item.id == params.detailsId);
          return { singleData };
        },
      },
      {
        path: "login",
        element: <LoginPages></LoginPages>,
      },
      {
        path: "register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
