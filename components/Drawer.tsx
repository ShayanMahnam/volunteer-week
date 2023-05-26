import React, { useState } from "react";
import cardsData from "../cards.json";
import ModalMessages from "./ModalMessages";
import GreenBoard from "./GreenBoard";

const Drawer: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleItemClick = (cardId: number) => {
    setSelectedCardId(cardId);
  };

  const sortedCardsData = cardsData.sort((a, b) =>
    a.subject.localeCompare(b.subject)
  );

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
          {sortedCardsData.map((card) => (
            <li
              className="hover:text-black"
              key={card.id}
              onClick={() => handleItemClick(card.id)}
            >
              <p>{card.subject}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {selectedCardId !== null && (
        <ModalMessages
          cardId={selectedCardId}
          closeModal={() => setSelectedCardId(null)}
        />
      )}
    </div>
  );
};

export default Drawer;
