import { createContext, useContext, useEffect, useState } from "react";

export const DeliverooContext = createContext();

const DeliverooProvider = ({ children }) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [ready, setReady] = useState(false)
  const [smt, setsmt] = useState(5)

  useEffect(()=> {
    if(!restaurantDetails) return
    setReady(true)
  }, [restaurantDetails])

    
    
  return (
    <DeliverooContext.Provider
      value={{ restaurantDetails, setRestaurantDetails, ready, smt }}
    >
      {children}
    </DeliverooContext.Provider>
  );
};

export default DeliverooProvider;
export const useDeliverooContext = () => useContext(DeliverooContext);
