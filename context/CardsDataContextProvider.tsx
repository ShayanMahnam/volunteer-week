import { useState } from "react";
import CardsDataContext from "./CardsDataContext";
import cardsDataJson from "../cards.json";

const CardsDataContextProvider = ({children}) => {
  const cardsData = cardsDataJson.sort(((a, b) => (a.subject.localeCompare(b.subject))));

  const [subject, setSubject] = useState(null);

  return (
    <CardsDataContext.Provider value={{cardsData, subject, setSubject}}>
      {children}
    </CardsDataContext.Provider>
  )
}

export default CardsDataContextProvider;