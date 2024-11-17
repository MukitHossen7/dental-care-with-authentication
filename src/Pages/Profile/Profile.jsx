import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  console.log(user);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    console.log(name, photo, email);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
      email: email,
    })
      .then(() => {
        updateUser({
          ...user,
          displayName: name,
          photoURL: photo,
          email: email,
        });
        toast.success("Profile updated successfully");
        document.getElementById("my_modal_1").close();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center pt-10 gap-5">
      <div className="border border-yellow-300 p-6 rounded-xl flex gap-3 flex-col items-center">
        <img
          className="w-20 h-20 object-cover rounded-lg"
          src={user?.photoURL}
        ></img>
        <h2 className="font-semibold text-xl">Name : {user?.displayName}</h2>
        <p className="font-medium">Email : {user?.email}</p>
      </div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Update profile
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form className="card-body" onSubmit={handleUpdateProfile}>
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
            <button className="btn btn-primary mt-4">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
