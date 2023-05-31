import { useState } from "react";
import CardsDataContext from "./CardsDataContext";
import cardsDataJson from "../cards.json";

const CardsDataContextProvider = ({children}) => {
  const cardColours = ["white", "green", "pink", "yellow", "blue", "purple"];
  // sort by subject and then inject a color key/value that remains static
  const cardsData = cardsDataJson.sort(((a, b) => (a.subject.localeCompare(b.subject)))).map((card, index) => ({...card, color: `card-bg-${cardColours[index % cardColours.length]}`}))

  const [subject, setSubject] = useState(null);

  return (
    <CardsDataContext.Provider value={{cardsData, subject, setSubject}}>
      {children}
    </CardsDataContext.Provider>
  )
}

export default CardsDataContextProvider;