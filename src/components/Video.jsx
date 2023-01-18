import React, { useRef, useState } from "react";
import "../styles/Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, channel, description, song, likes, shares, messages }) {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    // if the video is playing, pause it.
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      // if the video is paused, play it.
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleClick}
        ref={videoRef}
        className="video__player"
        src={url}
        loop
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
