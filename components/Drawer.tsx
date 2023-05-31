import React, { useContext, useState } from "react";
import { CardsDataContext } from "../context/CardsDataContext";
import GreenBoard from "./GreenBoard";

const Drawer: React.FC = () => {
  const { cardsData, setSubject } = useContext(CardsDataContext);
  const [activeSubject, setActiveSubject] = useState("All Messages");

  const uniqueSubjects = [
    "All Messages",
    "All The Volunteers",
    ...Array.from(
      new Set(
        cardsData
          .filter((obj) => obj.subject !== "All The Volunteers")
          .map((obj) => obj.subject)
          .sort((a, b) => a.localeCompare(b))
      )
    ),
  ];

  const handleListItemClick = (subject: string) => {
    if (subject === "All Messages") {
      setSubject("");
    } else {
      setSubject(subject);
    }
    setActiveSubject(subject); // Update the activeSubject state
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content relative z-0">
        <label
          htmlFor="my-drawer"
          className="absolute top-5 left-5 z-20 btn drawer-button custom-drawer-button"
        >
          Open drawer
        </label>
        <div className="absolute top-0 z-10">
          <GreenBoard />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="custom-sidebar menu p-4 w-80 bg-base-100 text-base-content">
          {uniqueSubjects.map((subject, index) => (
            <li
              className={`hover:text-black ${
                activeSubject === subject ? "text-black" : ""
              }`}
              key={index}
              onClick={() => handleListItemClick(subject)}
            >
              <p>{subject}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
