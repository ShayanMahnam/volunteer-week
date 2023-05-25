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
    <div className="relative py-48 overflow-x-hidden">
      <div className="rope-container">
        <div className="absolute rope top-[6rem]">
          <img src="/media/pictures/rope_x3.webp" alt="Rope" />
          <img src="/media/pictures/rope_x3.webp" alt="Rope" />
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
        {/* <div className="relative w-60 h-96">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-[-5.67deg] z-10 w-[100px] h-auto"
              src="/media/img/Photo_pin.webp"
              alt="pin"
            />
            <div className="absolute z-0 top-12 pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/2_cl8bxd.webp")',
                }}
              ></div>
            </div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl -rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436017/volunteers/10_ppg9rw.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/9_fhlnns.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl -rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/1_tct4vb.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/4_fgkfo9.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl -rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/3_l1rc0l.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/5_frpq5o.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl -rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/11_djbrih.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/7_ngtfe9.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl -rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/6_ce55hw.webp")',
              }}
            ></div>
          </div>
          <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/8_b5hlzt.webp")',
              }}
            ></div>
          </div> */}
      </Marquee>
    </div>
  );
};

export default Carousel;
