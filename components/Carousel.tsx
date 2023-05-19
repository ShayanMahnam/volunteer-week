/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

const Carousel: React.FC = () => {
  return (
    <div className="relative py-12 flex items-center overflow-x-hidden">
      <Marquee>
        <div className="pb-10 px-3 pt-3 m-6 w-60 h-72 border rounded bg-white shadow-xl rotate-1">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dhfp1rz0p/image/upload/f_auto,q_auto/v1684436018/volunteers/2_cl8bxd.webp")',
            }}
          ></div>
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
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
