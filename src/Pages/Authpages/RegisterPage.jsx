import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg">
          <h2 className="font-medium text-3xl text-center pt-5">
            Register Now
          </h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <button className="flex gap-3 items-center justify-center py-2 px-5 border border-sky-500 mx-8 rounded-full mb-5 font-semibold text-sky-700">
            <FcGoogle className="text-2xl" />
            Sign up Google
          </button>
          <p className="text-sm font-medium text-center pb-5 ">
            Already have account? Please{" "}
            <span className="text-red-500 underline">
              <Link to="/login">LogIn</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
