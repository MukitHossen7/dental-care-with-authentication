import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Feedback from "../../Components/Feedback/Feedback";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Link to="/treatments" className="btn btn-accent">
        View All Treatments
      </Link>
      <Feedback></Feedback>
    </div>
  );
};

export default HomePage;
