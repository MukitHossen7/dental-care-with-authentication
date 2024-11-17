import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { createUserAccount, signInGoogle, updateUserProfile, user, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (user) {
    return <Navigate to={location.state || "/"} />;
  }
  const handleRegisterFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserAccount(email, password)
      .then((result) => {
        toast.success("Registration successful");
        e.target.reset();
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photo }).then(
          () => {}
        );
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
        toast.error("This email-already-in-use");
      });
  };
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        toast.success("Google Sign-In successful");
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg">
          <h2 className="font-medium text-3xl text-center pt-5">
            Register Now
          </h2>
          <form className="card-body" onSubmit={handleRegisterFrom}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                name="photo"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="flex gap-3 items-center justify-center py-2 px-5 border border-sky-500 mx-8 rounded-full mb-5 font-semibold text-sky-700"
          >
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
