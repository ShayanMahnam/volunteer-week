import React from "react";
import cardsData from "../cards.json";

interface BoardModalMessageProps {
  cardId: number;
}

const BoardModalMessage: React.FC<BoardModalMessageProps> = ({ cardId }) => {
  const selectedCard = cardsData.find((card) => card.id === cardId);

  if (!selectedCard) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="paper h-[550px] w-[250px] sm:w-[350px] md:w-[450px]">
        <label
          htmlFor="my-modal-3"
          className="close-icon absolute right-2 top-2 text-white"
        >
          &times;
        </label>
        <div className="lines bg-white">
          <div className="text">
            <p className="font-bold text-black">{selectedCard.subject}</p>
            <br />
            <br />
            <p className="text-black">{selectedCard.content}</p>
            <br />
            <p className="text-black text-right">- {selectedCard.author}</p>
          </div>
        </div>

        <div className="holes hole-top"></div>
        <div className="holes hole-middle"></div>
        <div className="holes hole-bottom"></div>
      </div>
    </div>
  );
};

export default BoardModalMessage;