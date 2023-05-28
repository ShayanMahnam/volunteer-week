import React from "react";

const Board = () => {
  return (
    <>
      <div className="container relative lg:mx-w-[1200px]">
        <div className="board z-0"></div>
        <div className="card-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-auto text-orange-950">
          <div className="card-object">
            <div className="header"></div>
            <div className="aside"></div>
            <div className="main">
              <blockquote className="message">
                We are incredibly grateful for your time, dedication, and
                expertise, and we want to say a big THANK YOU for all that you
                do.
              </blockquote>
              <div className="footer text-md sm:text-lg md:text-xl">
                - Trainees
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="floating">
        <div className="card-object rotate">
          <header></header>
          <aside></aside>
          <main>
            <blockquote className="message">
              We are incredibly grateful for your time, dedication, and
              expertise, and we want to say a big THANK YOU for all that you do.
            </blockquote>
          </main>
          <footer className="author">Trainees</footer>
        </div>
      </div> */}
    </>
  );
};

export default Board;
