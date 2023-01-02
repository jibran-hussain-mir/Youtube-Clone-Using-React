import React from "react";
import "./VideoRow.css";

function VideoRow({
  image,
  title,
  channel,
  view,
  timestamp,
  channelImage,
  subs,
  description,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={channel}></img>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs} subscribers</span>
          </span>{" "}
          . {view} views . {timestamp}
          <p className="videoRow__description">{description}</p>
        </p>
      </div>
    </div>
  );
}

export default VideoRow;
