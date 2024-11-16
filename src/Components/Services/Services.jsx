import { useContext } from "react";
import { ApiContext } from "../../Providers/ApiProvider";

const Services = () => {
  const { servicesData } = useContext(ApiContext);
  console.log(servicesData);

  return (
    <div className="py-10 ">
      <h2 className="font-bold text-2xl pb-7">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.slice(0, 4).map((service) => (
          <div key={service.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={service.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {service.treatment}
                <div className="badge badge-secondary">${service.cost}</div>
              </h2>
              <p>{service.description.slice(0, 80)}...</p>
              <div className="card-actions justify-start">
                <button className="btn btn-accent">Checkout More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
