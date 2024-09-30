import React from "react";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
      className="service-detail-content-video"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  );
};

export default VideoPlayer;
