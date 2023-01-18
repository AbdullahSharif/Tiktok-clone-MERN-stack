import React, { useState } from "react";
import "../styles/VideoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    liked ? setLiked(false) : setLiked(true);
  };
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={handleClick} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={handleClick} />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
