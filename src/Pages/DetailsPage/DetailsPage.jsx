import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const { singleData } = useLoaderData();

  const { image, treatment, description } = singleData;
  return (
    <div className="py-10">
      <div
        className="hero py-32 rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5">{description}</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
