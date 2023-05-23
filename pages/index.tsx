import DragAndDropArea from "@/components/DragAndDropArea";
import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      <div>
        <Drawer />
      </div>

      <Board />

      <Carousel />
      <h2 className="p-2 text-center text-3xl text-black">Trainees Messages</h2>
      <DragAndDropArea />
    </>
  );
}
