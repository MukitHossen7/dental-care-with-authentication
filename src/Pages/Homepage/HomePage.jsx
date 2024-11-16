import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Link to="/treatments" className="btn btn-accent">
        View All Treatments
      </Link>
    </div>
  );
};

export default HomePage;
