import React from "react";
import outfit1 from '../images/outfit1.jpg'
import outfit2 from '../images/outfit2.jpg'
import outfit3 from '../images/outfit9.jpg'
import outfit4 from '../images/outfit4.jpg'
import outfit5 from '../images/outfit5.jpg'
import outfit6 from '../images/outfit6.jpg'

const accessories = [
  {
    id: "1",
    img: outfit1,
  },
  {
    id: "2",
    img: outfit2,
  },
  {
    id: "3",
    img: outfit3,
  },
  {
    id: "4",
    img: outfit4,
  },
  {
    id: "5",
    img: outfit5,
  },
  {
    id: "6",
    img: outfit6,
  },
];

function Accessories() {
  return (
    <div>
      <div className="w-full h-full flex flex-row flex-wrap items-center">
        <div className="w-full flex flex-row flex-wrap items-center bg-black">
          {accessories.map((accessorie) => (
            <div
              key={accessorie.id}
              className="w-1/3 h-54 flex justify-center items-center ease-in duration-300  hover:bg-zinc-100 rounded"
            >
              <img
                src={accessorie.img}
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

export default Accessories;
