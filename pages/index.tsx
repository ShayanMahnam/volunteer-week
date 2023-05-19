import DragAndDropArea from "@/components/DragAndDropArea";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <h2 className="p-2 text-center text-3xl">Trainees Messages</h2>
      <DragAndDropArea />
    </>
  );
}
