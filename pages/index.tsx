import Carousel from "@/components/Carousel";
import Drawer from "@/components/Drawer";
import Board from "@/components/Board";
import Billboard from "@/components/Billboard";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// import the Context Provider and wrap the Drawer Component
import { CardsDataContextProvider } from "@/context/CardsDataContext";

export default function Home() {
  return (
    <>
      <Billboard />
      <Board />
      <Carousel />
      <h1 className="text-center text-black">Trainees Messages</h1>
      {/* Wrap the Drawer in the CardsData Context Provider */}
      <CardsDataContextProvider>
        <Drawer />
      </CardsDataContextProvider>
      <ScrollToTopButton />
    </>
  );
}
