/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
const ApiProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([]);
  const [clientsData, setClientsData] = useState([]);
  useEffect(() => {
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data));
    fetch("/happyclients.json")
      .then((response) => response.json())
      .then((data) => setClientsData(data));
  }, []);

  const ApiInfo = {
    servicesData,
    clientsData,
  };

  return (
    <div>
      <ApiContext.Provider value={ApiInfo}>{children}</ApiContext.Provider>
    </div>
  );
};

export default ApiProvider;
