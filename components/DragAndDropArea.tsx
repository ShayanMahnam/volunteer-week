import Draggable from "react-draggable";
import Card from "./Card";
import cardsData from "../cards.json";

const DragAndDropArea: React.FC = () => {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-full p-4 flex flex-wrap items-start justify-start">
        {cardsData.map((card, index) => (
          <Draggable handle=".card-header" key={index}>
            <Card {...card} />
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropArea;
