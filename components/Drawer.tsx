import React from "react";
// import useContext and the CardsDataContext
import { useContext } from "react";
import { CardsDataContext } from "../context/CardsDataContext";
// (!) this component is no longer neccessary:
// import DrawerModalMessage from "./DrawerModalMessage";
import GreenBoard from "./GreenBoard";

const Drawer: React.FC = () => {

  // bring in cardsData and setSubject method from CardsDataContext
  const { cardsData, setSubject} = useContext(CardsDataContext);

  // this extracts all the unique subjects from the cardsData, and arranges them with a Reset option (1st), All The Volunteers (2nd), followed by an Alphabetical List of Volunteers
  const uniqueSubjects = [
        "Reset",
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

  // if "Reset" is clicked, make the subject "", otherwise set the Subject to the clicked subject (Volunteer Name)
  const handleListItemClick = (subject: string) => subject === "Reset" ? setSubject("") : setSubject(subject);

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
        <ul className="custom-sidebar menu p-4 w-80 bg-base-100 text-base-content ">
          {uniqueSubjects.map((subject, index) => (
            <li
              className="hover:text-black"
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
