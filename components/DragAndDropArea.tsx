import React from "react";
import { Rnd } from "react-rnd";
import cardsData from "../cards.json";
import { DraggableEvent } from "react-draggable";

const DragAndDropArea: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);
  const [maxZIndex, setMaxZIndex] = React.useState(cardsData.length);

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    const clickedCard = event.currentTarget as HTMLElement;
    const newZIndex = maxZIndex + 1;

    setMaxZIndex(newZIndex);
    clickedCard.style.zIndex = newZIndex.toString();

    if (selectedCard === index) {
      // if the same card is clicked twice, unselect it
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };

  const handleCardDragStart = (event: DraggableEvent, index: number) => {
    const clickedCard = event.currentTarget as HTMLElement;
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    clickedCard.style.zIndex = newZIndex.toString();
    setSelectedCard(index);
  };

  const handleCardDragStop = () => {
    setSelectedCard(null);
  };

  const cardWidth = 350;
  const cardHeight = 150;

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full border-1 border-black"
    >
      <h2 className="p-2  text-center text-3xl">Trainees Messages</h2>
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
              onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                handleCardClick(event, index)
              }
              onTouchStart={(event: React.TouchEvent<HTMLDivElement>) =>
                handleCardClick(event, index)
              }
              onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) =>
                handleCardClick(event, index)
              }
              onDragStart={(event: DraggableEvent) =>
                handleCardDragStart(event, index)
              }
              onDragStop={handleCardDragStop}
              style={{
                zIndex: index,
              }}
            >
              <div className="card">
                <div className="card_text">
                  <p>{card.subject}</p>
                  <p>{card.content}</p>
                  <p className="author">{card.author}</p>
                </div>
              </div>
            </Rnd>
          );
        })
      )}
    </div>
  );
};

export default DragAndDropArea;
