import React, { useRef, useState } from "react";
import "../styles/Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video() {
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
        src="https://v16-webapp.tiktok.com/e262c43f3988a8ed822bd35eb92c0579/63c70be0/video/tos/useast2a/tos-useast2a-pve-0037-aiso/oMrIC0pthfAZR4QoUIsznchyMthCEMxBZh9NAF/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3882&bt=1941&cs=0&ds=3&ft=hatGN2zOjVQ9wy9pjDhd.wAUkX4gTsU9pXtMA4YqEeC&mime_type=video_mp4&qs=0&rc=ZGk5OWZlODU6M2U4PDpnNEBpamc6eWY6ZmhyaTMzZjczM0BiNTEuMzRhXzExNTIvLTQtYSNqMmBgcjQwMS1gLS1kMWNzcw%3D%3D&l=20230117145754DCD7A22F64CB57234081&btag=80000"
        loop
      ></video>

      <VideoFooter />
      <VideoSidebar />
    </div>
  );
}

export default Video;
