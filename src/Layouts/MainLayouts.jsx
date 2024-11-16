import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayouts = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 lg:container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
