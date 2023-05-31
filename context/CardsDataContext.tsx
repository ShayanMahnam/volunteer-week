import React, { ReactNode, createContext, useState } from "react";
import cardsDataJson from "../cards.json";

interface CardData {
  id: number;
  subject: string;
  author: string;
  content: string;
}

interface CardsDataContextType {
  cardsData: CardData[];
  subject: string | null;
  setSubject: React.Dispatch<React.SetStateAction<string | null>>;
}

interface CardsDataContextProviderProps {
  children: ReactNode;
}

export const CardsDataContext = createContext<CardsDataContextType>(
  {} as CardsDataContextType
);

export const CardsDataContextProvider: React.FC<CardsDataContextProviderProps> = ({ children }) => {

    // an array of colours to reference when injecting a static colour to each card
    const cardColours: string[] = ["white", "green", "pink", "yellow", "blue", "purple"];

    // sort by subject and then inject a static colour key/value
    const cardsData: CardData[] = cardsDataJson
    .sort((a: CardData, b: CardData) => a.subject.localeCompare(b.subject))
    .map((card: CardData, index: number) => ({
      ...card,
      color: `card-bg-${cardColours[index % cardColours.length]}`,
    }));

  const [subject, setSubject] = useState<string | null>(null);

  return (
    <CardsDataContext.Provider value={{ cardsData, subject, setSubject }}>
      {children}
    </CardsDataContext.Provider>
  );
};