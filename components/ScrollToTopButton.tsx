/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(scrollTop > 0);
    };
    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    // Scroll to top when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render the arrow button only when it's visible
  return isVisible ? (
    <img
      src="/arrow.svg"
      alt="arrow - go up on the page"
      className="fixed bottom-5 right-5 w-[30px] h-[30px]"
      onClick={handleScrollToTop}
    />
  ) : null;
};

export default ScrollToTopButton;
