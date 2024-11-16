import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
        <a className="btn">Log_In</a>
      </div>
    </div>
  );
};

export default Header;
