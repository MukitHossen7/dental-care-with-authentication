import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const LoginPages = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const { signInUser, signInGoogle, user } = useContext(AuthContext);
  if (user) {
    return <Navigate to={location.state || "/"} />;
  }
  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("User signed in successfully: ", result);
        toast.success("Login successful");
        navigate(location.state);
      })
      .catch((error) => {
        console.log("Error", error);
        toast.error("Invalid credentials email/password");
      });
  };
  const handleSignInGoogle = () => {
    signInGoogle()
      .then((result) => {
        toast.success("Google Sign-In successful");
        console.log(result);
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg">
        <h2 className="font-medium text-3xl text-center pt-5">Login Now</h2>
        <form className="card-body" onSubmit={handleLoginForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <button
          onClick={handleSignInGoogle}
          className="flex gap-3 items-center justify-center py-2 px-5 border border-sky-500 mx-8 rounded-full mb-5 font-semibold text-sky-700"
        >
          <FcGoogle className="text-2xl" />
          Sign in Google
        </button>
        <p className="text-sm font-medium text-center pb-5 ">
          New to the website? Please{" "}
          <span className="text-red-500 underline">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPages;
