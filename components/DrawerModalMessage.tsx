import React from "react";
import cardsData from "../cards.json";

interface DrawerModalMessageProps {
  cardId: number;
  closeModal: () => void;
}

const DrawerModalMessage: React.FC<DrawerModalMessageProps> = ({
  cardId,
  closeModal,
}) => {
  const selectedCard = cardsData.find((card) => card.id === cardId);

  if (!selectedCard) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="paper h-[90%] w-[90%] md:w-[450px] md:h-[550px]">
          <div className="lines bg-white">
            <div className="text">
              <p className="font-bold text-black">{selectedCard.subject}</p>
              <br />
              <br />
              <p className="text-black">{selectedCard.content}</p>
              <br />
              <p className="text-black text-right">- {selectedCard.author}</p>
            </div>
            <button
              className="close-button absolute top-2 right-2 cursor-pointer"
              onClick={closeModal}
            >
              <span className="close-icon">&times;</span>
            </button>
          </div>

          <div className="holes hole-top"></div>
          <div className="holes hole-middle"></div>
          <div className="holes hole-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default DrawerModalMessage;
