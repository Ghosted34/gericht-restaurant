import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { mealVideo } from "../../constants/images";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <section className="app__video" title="A Little Ad">
      <video
        src={mealVideo}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_cirle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
