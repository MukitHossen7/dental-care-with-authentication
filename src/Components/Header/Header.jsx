import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged out successfully");
      navigate("/");
    });
  };
  return (
    <div className="navbar bg-base-100 mt-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  gap-10 font-semibold"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/treatments">All Treatments</NavLink>
            <NavLink to="/appointment">My Appointment</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </ul>
        </div>
        <Link to="/" className="font-bold text-xl">
          DENTAL_CARE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 font-semibold px-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/treatments">All Treatments</NavLink>
          <NavLink to="/appointment">My Appointment</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex flex-row-reverse gap-3 items-center">
            <button onClick={handleLogOut} className="btn">
              Log_Out
            </button>
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={user?.photoURL}
            ></img>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Log_In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
