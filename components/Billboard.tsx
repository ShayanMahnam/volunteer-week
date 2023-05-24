/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";

const Billboard: React.FC = () => {
  const [currentChannel, setCurrentChannel] = useState(0);
  const [activeChannels, setActiveChannels] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const gifTVURLs = [
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117878/trippy-square_jqupb3.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117878/space-stallions_zmueag.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117882/dancing-bears-small_v4oqvi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117881/trippy-rick_a42hyj.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117882/psychedelic-reindeer_an5vsi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117877/jake-the-dog_scm4bi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571120920/the-regular-show_pwt1gp.gif",
  ];

  const changeChannel = () => {
    setCurrentChannel((prevChannel) => (prevChannel + 1) % gifTVURLs.length);
    setActiveChannels((prevChannels) => [...prevChannels, currentChannel + 1]);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveChannels((prevChannels) => prevChannels.slice(1));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [activeChannels]);

  return (
    <section className="section gutter">
      <div className="wrapper">
        <div className="gif-tv">
          <div id="gif_tv_viewport" className="viewport">
            <img
              id="gif_tv_video"
              className="video"
              src={gifTVURLs[currentChannel]}
              alt="shows"
            />
            <div
              id="gif_tv_pixels"
              className="pixels"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571119227/vhs-overlay_zpzs7x.png')",
              }}
            ></div>
            <div className="meta-left">
              {activeChannels.length > 0 && (
                <span className="active">
                  Ch{" "}
                  {activeChannels[activeChannels.length - 1]
                    .toString()
                    .padStart(2, "0")}
                </span>
              )}
            </div>
          </div>
          <img
            className="tv"
            src="https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571119227/80s-tv_ekkex2.png"
            alt="tv"
          />

          <button
            id="gif_tv_button_channel"
            className="dial"
            title="Change the Channels"
            onClick={changeChannel}
          ></button>
          <span className="cta">Push the Button To find Trainees Video!</span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src="https://freesound.org/data/previews/219/219477_4056007-lq.mp3"
      />
    </section>
  );
};

export default Billboard;
