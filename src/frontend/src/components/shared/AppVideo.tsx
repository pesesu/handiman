import { useState } from "react";

const AppVideo = () => {
  const [videoUrl, setVideoUrl] = useState("https://youtu.be/XUMqYJdBMy8");

  // Extract embed URL from YouTube/Vimeo links
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.split("v=")[1] || url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return "";
  };

  return (
    <div className="">
      {/* Display Video */}
      {videoUrl && (
        <div className="">
          <iframe
            src={getEmbedUrl(videoUrl)}
            width="100%"
            height="400"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default AppVideo;
