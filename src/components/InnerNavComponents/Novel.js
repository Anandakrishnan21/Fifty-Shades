import React from "react";
import grey1 from "../../images/greyb.webp";
import grey2 from "../../images/greyb1.webp";
import darker1 from "../../images/darkerb.webp";
import darker2 from "../../images/darkerb1.webp";
import freed1 from "../../images/freedb.webp";
import freed2 from "../../images/freedb1.webp";

const novels = [
  {
    id: "1",
    img: grey1,
  },
  {
    id: "2",
    img: grey2,
  },
  {
    id: "3",
    img: darker1,
  },
  {
    id: "4",
    img: darker2,
  },
  {
    id: "5",
    img: freed1,
  },
  {
    id: "6",
    img: freed2,
  },
];

function Novel() {
  return (
    <div>
      <div className="w-full h-full flex flex-row flex-wrap items-center">
        <div className="w-full flex flex-row flex-wrap items-center bg-black">
          {novels.map((novel) => (
            <div
              key={novel.id}
              className="w-1/3 h-54 flex justify-center items-center ease-in duration-300  hover:bg-zinc-100 rounded"
            >
              <img
                src={novel.img}
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

export default Novel;
