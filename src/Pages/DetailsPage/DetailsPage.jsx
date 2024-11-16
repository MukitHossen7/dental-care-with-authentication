import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { detailsId } = useParams();

  return (
    <div>
      <h2>This is Details page {detailsId}</h2>
    </div>
  );
};

export default DetailsPage;
