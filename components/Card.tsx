import { useRef, useState } from "react";
import Draggable, { DraggableProps } from "react-draggable";

type CardProps = {
  subject: string;
  author: string;
  content: string;
};

const Card: React.FC<CardProps> = ({ subject, author, content }) => {
  const draggableRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState<number>(1);

  const handleStart = () => {
    setZIndex((prevZIndex) => prevZIndex + 1);
  };

  return (
    <Draggable nodeRef={draggableRef} onStart={handleStart}>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        ref={draggableRef}
        style={{ zIndex }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{subject}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="text-gray-600 text-base">{author}</div>
        </div>
      </div>
    </Draggable>
  );
};

export default Card;
