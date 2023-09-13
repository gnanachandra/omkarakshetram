import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const YoutubeLive = () => {
  const [link, setLink] = useState("");
  useEffect(() => {
    const getLiveStream = async () => {
      const response = await axios.get("/api/stream");
      setLink(response.data.stream.link);
    };
    getLiveStream();
  }, []);
  console.log(link);
  return (
    <div className="flex items-center justify-center">
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeLive;
