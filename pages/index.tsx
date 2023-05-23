import DragAndDropArea from "@/components/DragAndDropArea";
import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
import Board from "@/components/Board";

export default function Home() {
  return (
    <>
      <Board />
      <Carousel />
      <h1 className="text-center">Trainees Messages</h1>
      <Drawer />
    </>
  );
}
