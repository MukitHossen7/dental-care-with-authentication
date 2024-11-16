import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../Providers/ApiProvider";

const DetailsPage = () => {
  const { detailsId } = useParams();
  const { servicesData } = useContext(ApiContext);
  const [serviceDetails, setServicesDetails] = useState({});
  useEffect(() => {
    const services = servicesData.find(
      (service) => service.id === parseInt(detailsId)
    );
    setServicesDetails(services);
  }, [servicesData, detailsId]);
  console.log(serviceDetails);
  return (
    <div className="py-10">
      <div
        className="hero py-32 rounded-lg"
        style={{
          backgroundImage: `url(${serviceDetails.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {serviceDetails.treatment}
            </h1>
            <p className="mb-5">{serviceDetails.description}</p>
            <button className="btn btn-primary">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
