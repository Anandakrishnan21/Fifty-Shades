import React from "react";
import ReactPlayer from "react-player";

const datas = Array.from(
  { length: 9 },
  (_, id) => `../video/video${id + 1}.mp4`
);

function VideoPlayer() {
  return (
    <div className="w-full h-full bg-black flex flex-row flex-wrap items-center">
      {datas.map((data, id) => (
        <div
          key={id}
          className="w-full md:w-1/2 lg:w-1/3 h-full flex justify-center flex-row flex-wrap items-center ease-in duration-300 hover:bg-zinc-100 rounded p-2"
        >
          <ReactPlayer url={data} controls />
        </div>
      ))}
    </div>
  );
}

export default VideoPlayer;
