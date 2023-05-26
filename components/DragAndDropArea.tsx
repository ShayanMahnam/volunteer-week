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

  const isMobile = containerWidth <= 768;

  const cardWidth = React.useMemo(() => {
    if (isMobile) {
      return 300; // Set the desired width for mobile devices
    }
    return 450; // Set the default width for other screen sizes
  }, [isMobile]);

  const cardHeight = 350;

  return (
    <div ref={containerRef} className="relative w-and-h border-1 border-black">
      {containerWidth === 0 || containerHeight === 0 ? (
        <div>Loading...</div>
      ) : (
        cardsData.map((card) => {
          const maxWidth = containerWidth - cardWidth;
          const maxHeight = containerHeight - cardHeight;
          const x = Math.floor(Math.random() * maxWidth);
          const y = Math.floor(Math.random() * maxHeight);

          return (
            <Rnd
              key={card.id}
              default={{
                x,
                y,
                width: cardWidth,
                height: "auto",
              }}
              bounds={isMobile ? undefined : "parent"}
              onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                handleCardClick(event, card.id)
              }
              onTouchStart={(event: React.TouchEvent<HTMLDivElement>) =>
                handleCardClick(event, card.id)
              }
              onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) =>
                handleCardClick(event, card.id)
              }
              onDragStart={(event: DraggableEvent) =>
                handleCardDragStart(event, card.id)
              }
              onDragStop={handleCardDragStop}
              style={{
                zIndex: card.id,
              }}
            >
              <div className={`card shadow-xl ${card.color}`}>
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
