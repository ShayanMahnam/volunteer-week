import DragAndDropArea from "./DragAndDropArea";

const GreenBoard = () => {
  return (
    <div className="green-container relative lg:mx-w-[1200px]">
      <div className="green-board z-0"></div>
      <div className="absolute top-0 z-0 w-full h-full">
        <DragAndDropArea />
      </div>
    </div>
  );
};

export default GreenBoard;
