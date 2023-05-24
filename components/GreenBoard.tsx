import DragAndDropArea from "./DragAndDropArea";
import Image from "next/image";

const GreenBoard = () => {
  return (
    <div className="green-container relative lg:mx-w-[1200px]">
      <div className="green-board z-0"></div>
      <div className="absolute top-0 z-0 w-full h-full">
        <DragAndDropArea />
      </div>
      <Image
        className="absolute bottom-[14px] left-1/2 transform -translate-x-1/2  z-20 w-2/3 h-auto md:w-1/3"
        src="/media/pictures/green_board_part.webp"
        alt="board part"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default GreenBoard;
