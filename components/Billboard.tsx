/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";

const Billboard: React.FC = () => {
  const [currentChannel, setCurrentChannel] = useState(0);
  const [activeChannels, setActiveChannels] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const gifTVURLs = [
    "/media/pictures/Text.webp",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTdlOGMwNWE3ZDdiMGRjMjA5OTEyOGVlNzEzNzliMzQxYzc0ZmE0NSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/tO5j1dnq9UeeRYsWvY/giphy.gif",
    "https://media.giphy.com/media/9TTBZN4K3vIhj8N7Yw/giphy-downsized-large.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGIzNzQwMmExZGQ0MTBkNTRlZWI2MzA2N2M2Y2VhNGRlNjA0YzQyOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/XXUwCCGsSm3rIN85m9/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTlkNDZjM2FiNGJjNTBiMTA3ZmNiMWRhMjlmODAwNGRlZDE4NjU4NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/eCND9RUy52RchilBDA/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGVlODhiMGJjMDA0ODFkZTcyYjljNWQ4ZTExYjY3ZjdmMTlhMjM0MCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/m5lHOjwKidj5fj0FZj/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBiMGE5NjRmYzU0ZGNkNmY2OGMxN2YwYmFlOTJlNTVmNTc3NzBlZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/BPohUTgMLU5KpQZfDR/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZlZWVmNTVjYzkxNDhlNjE3N2ZhNTk1NDU0ZWVjMGU4MzgwYmQzNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/jNCyMq7ZjtVbdVngEB/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWIzZTdkY2Q4OWYwODE4OWJiM2E4Y2M4OWU5MjQ5YThmNWE2NTI1YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4oDhrpVidjNCiHv3Lr/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZjOGFjY2FjNTY1YjdjZjlhZmMwOTE4MDZjN2I5MWU0MzE3ZjNkNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/IiMr4bEuu3gDGEofv3/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDIwY2ZkNTI2Y2VmMWM3Mjg4MDIxYjk4ODk3YmY3NDkwMzZlMGVkNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/snsjJvIFTI0zLi62Sl/giphy.gif",
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
