import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter.js";
import VideoSidebar from "./components/sidebar/videoSideBar.js"
import './video.css'

function Video({userName, url, likes, messages, shares, content, song}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  
  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar
          likes={likes}
          messages={messages}
          shares={shares}
      />
      <VideoFooter
          userName={userName}
          content={content}
          song={song}
      />
    </div>
  );
}

export default Video;
