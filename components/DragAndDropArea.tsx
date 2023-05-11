import Card from "./Card";
import cardsData from "../cards.json";

const DragAndDropArea: React.FC = () => {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      <h2 className="p-4">Trainees Letters</h2>
      <div className="absolute left-0 top-0 h-full w-full p-4 flex flex-wrap items-start justify-start">
        {cardsData.map((card, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
            }}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropArea;
