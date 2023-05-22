import React from "react";
import cardsData from "../cards.json";

interface Card {
  id: number;
  subject: string;
  author: string;
  content: string;
}

interface ModalMessagesProps {
  cardId: number;
  closeModal: () => void;
}

const ModalMessages: React.FC<ModalMessagesProps> = ({
  cardId,
  closeModal,
}) => {
  const selectedCard = cardsData.find((card) => card.id === cardId);

  if (!selectedCard) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-2/3 h-2/3 p-4">
        <h1 className="text-2xl font-bold text-black">{selectedCard.subject}</h1>
        <p className="text-black">{selectedCard.author}</p>
        <p className="text-black">{selectedCard.content}</p>
        <button className="absolute top-2 right-2 btn btn-primary" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalMessages;


