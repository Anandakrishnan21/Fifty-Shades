import React from "react";
import ReactPlayer from "react-player";
import video3 from "../Video/video3.mp4";
import video4 from "../Video/video4.mp4";
import video1 from "../Video/video1.mp4";
import video2 from "../Video/video2.mp4";
import video5 from "../Video/video5.mp4";
import video6 from "../Video/video6.mp4";
import video7 from "../Video/video7.mp4";
import video8 from "../Video/video8.mp4";
import video9 from "../Video/video9.mp4";

const datas = [
  {
    id: "1",
    video: video1,
  },
  {
    id: "2",
    video: video2,
  },
  {
    id: "3",
    video: video3,
  },
  {
    id: "4",
    video: video4,
  },
  {
    id: "5",
    video: video5,
  },
  {
    id: "6",
    video: video6,
  },
  {
    id: "7",
    video: video7,
  },
  {
    id: "8",
    video: video8,
  },
  {
    id: "9",
    video: video9,
  },
];

function VideoPlayer() {
  return (
    <div className="w-full h-full bg-black flex flex-row flex-wrap items-center">
      {datas.map((data) => (
        <div
          key={data.id}
          className="w-full md:w-1/2 lg:w-1/3 h-full flex justify-center flex-row flex-wrap items-center ease-in duration-300 hover:bg-zinc-100 rounded p-2"
        >
          <ReactPlayer url={data.video} controls />
        </div>
      ))}
    </div>
  );
}

export default VideoPlayer;
