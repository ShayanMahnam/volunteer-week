import React from "react";
import { Rnd } from "react-rnd";
import cardsData from "../cards.json";

const DragAndDropArea: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const handleCardClick = (index: number) => {
    if (selectedCard === index) {
      // if the same card is clicked twice, unselect it
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };

  const handleCardDragStart = (index: number) => {
    setSelectedCard(index);
  };

  const handleCardDragStop = () => {
    setSelectedCard(null);
  };

  const cardWidth = 250;
  const cardHeight = 150;

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full border-1 border-black"
    >
      <h2 className="p-2">Trainees Messages</h2>
      {containerWidth === 0 || containerHeight === 0 ? (
        <div>Loading...</div>
      ) : (
        cardsData.map((card, index) => {
          const maxWidth = containerWidth - cardWidth;
          const maxHeight = containerHeight - cardHeight;
          const x = Math.floor(Math.random() * maxWidth);
          const y = Math.floor(Math.random() * maxHeight);

          return (
            <Rnd
              key={index}
              default={{
                x,
                y,
                width: cardWidth,
                height: cardHeight,
              }}
              bounds="parent"
              onClick={() => handleCardClick(index)}
              onDragStart={() => handleCardDragStart(index)}
              onDragStop={handleCardDragStop}
              style={{
                zIndex: selectedCard === index ? 1 : 0,
              }}
            >
              <div className="bg-white border-1 border-black p-5 shadow-md">
                <h3 className="text-lg font-bold mb-2">{card.subject}</h3>
                <p className="text-sm">{card.content}</p>
                <p className="text-sm mt-2 text-gray-500">{card.author}</p>
              </div>
            </Rnd>
          );
        })
      )}
    </div>
  );
};

export default DragAndDropArea;
