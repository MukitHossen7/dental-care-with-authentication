import { useContext } from "react";
import { ApiContext } from "../../Providers/ApiProvider";

const Feedback = () => {
  const { clientsData } = useContext(ApiContext);

  return (
    <div className="py-10">
      <h2 className="font-bold text-2xl pb-7">Client Feedback</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientsData.map((client) => (
          <div
            key={client.reviewId}
            className="border border-gray-400 rounded-lg p-6"
          >
            <div className="flex justify-between items-center pb-3">
              <img
                src={client.userImg}
                className="w-10 h-10 object-cover rounded-full"
              ></img>
              <h3 className="font-bold text-xs">
                {new Date().toLocaleString()}
              </h3>
            </div>
            <p>{client.review}</p>
            <div className="rating rating-sm mt-4">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
