/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Carousel: React.FC = () => {
  //creating array for photos iterating
  const photoNumber = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  return (
    <div className="relative py-12 overflow-x-hidden md:py-24 lg:py-36">
      <div className="rope-container">
        <div className="absolute rope top-[6rem]">
          <img
            className="md:hidden"
            src="/media/pictures/rope.webp"
            alt="Rope"
          />
          <img
            className="md:hidden"
            src="/media/pictures/rope.webp"
            alt="Rope"
          />
          <img
            className="hidden md:block"
            src="/media/pictures/rope_x3.webp"
            alt="Rope"
          />
          <img
            className="hidden md:block"
            src="/media/pictures/rope_x3.webp"
            alt="Rope"
          />
        </div>
      </div>
      <Marquee>
        {photoNumber.map((num) => (
          <div key={num} className="relative w-60 h-96 m-6">
            <Image
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${
                num % 2 === 0 ? "rotate-[-5.67deg]" : "rotate-[7.25deg]"
              } z-10 w-[100px] h-auto`}
              src="/media/pictures/Pin.webp"
              alt="pin"
              width={100}
              height={100}
            />
            <div
              className={`absolute z-0 top-[4.5rem] px-3 pt-3 pb-10 w-60 h-72 border rounded bg-white shadow-xl ${
                num % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(/media/photos/Photo_${num}.webp)`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
