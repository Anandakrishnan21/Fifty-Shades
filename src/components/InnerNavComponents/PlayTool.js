import React from "react";
import red1 from '../../images/red1.jpg'
import red2 from '../../images/red2.jpg'
import red3 from '../../images/red3.jpg'
import red4 from '../../images/red4.jpg'
import red5 from '../../images/red5.png'
import red6 from '../../images/red6.jpg'


const redRoom = [
  {
    id: "1",
    img: red1,
  },
  {
    id: "2",
    img: red2,
  },
  {
    id: "3",
    img: red3,
  },
  {
    id: "4",
    img: red4,
  },
  {
    id: "5",
    img: red5,
  },
  {
    id: "6",
    img: red6
  },
];

function PlayTool() {
  return (
    <div>
      <div className="w-full h-full flex flex-row flex-wrap items-center">
        <div className="w-full flex flex-row flex-wrap items-center bg-black">
          {redRoom.map((room) => (
            <div
              key={room.id}
              className="w-1/3 h-54 flex justify-center items-center ease-in duration-300  hover:bg-zinc-100 rounded"
            >
              <img
                src={room.img}
                alt="img"
                fill
                className="object-contain w-full h-80 rounded p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayTool;
