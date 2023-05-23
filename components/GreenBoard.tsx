import DragAndDropArea from "./DragAndDropArea";

const GreenBoard = () => {
  return (
    <div className="green-container relative lg:mx-w-[1200px]">
      <div className="green-board z-0"></div>
      <h1 className="z-10 absolute top-0">Green Board</h1>
      <h2 className="absolute top-0 z-10text-center text-3xl text-black">
        Trainees Messages
      </h2>
      <div className="absolute top-0 z-0 w-full h-full">
        <DragAndDropArea />
      </div>
    </div>
  );
};

export default GreenBoard;
