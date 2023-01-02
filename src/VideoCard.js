import React from "react";
import Avatar from "@mui/material/Avatar";
import "./VideoCard.css";
import "./Header.css";

function VideoCard({ image, title, channel, view, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video__text">
          <p className="video__title" style={{ fontSize: "14px" }}>
            {title}
          </p>
          <p>{channel}</p>
          <p>
            {view} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
