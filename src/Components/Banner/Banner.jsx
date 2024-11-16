import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero bg-base-100 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" w-full lg:w-50%">
          <img
            src={bannerImg}
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className=" w-full lg:w-50%">
          <h1 className="text-5xl font-bold">
            A dental Clinic That you can Trust.
          </h1>
          <p className="py-6">
            Experience top-notch care at our trusted dental clinic. With skilled
            professionals, advanced technology, and a welcoming environment, we
            prioritize your oral health. From routine checkups to specialized
            treatments, we ensure a pain-free, personalized approach for every
            smile. Your confidence and comfort are our commitment. Visit us for
            care you can trust
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
