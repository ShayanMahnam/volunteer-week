import React from "react";

const Board = () => {
  return (
    <div className="container relative lg:mx-w-[1200px]">
      <div className="board z-0"></div>
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-xl text-orange-950 w-full h-auto px-20 sm:text-2xl md:text-3xl lg:text-4xl">
        We are incredibly grateful for your time, dedication, and expertise, and
        we want to say a big THANK YOU for all that you do.
      </h1>
    </div>
  );
};

export default Board;
