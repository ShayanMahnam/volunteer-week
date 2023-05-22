import React, { useState } from "react";
import cardsData from "../cards.json";
import ModalMessages from "./ModalMessages";

const Drawer: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleItemClick = (cardId: number) => {
    setSelectedCardId(cardId);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {cardsData.map((card) => (
            <li key={card.id} onClick={() => handleItemClick(card.id)}>
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
