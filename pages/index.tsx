import DragAndDropArea from "@/components/DragAndDropArea";
import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
import Board from "@/components/Board";
import GreenBoard from "@/components/GreenBoard";

export default function Home() {
  return (
    <>
      <div>
        <Drawer />
      </div>
      <Board />
      <Carousel />
      <GreenBoard />
    </>
  );
}
