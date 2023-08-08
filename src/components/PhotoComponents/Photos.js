import React from "react";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import img13 from "../images/img13.jpg";
import img14 from "../images/img14.jpg";
import img15 from "../images/img15.jpg";
import img16 from "../images/img16.jpg";
import img17 from "../images/img17.jpg";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import img20 from "../images/img20.jpg";
import img23 from "../images/img32.jpg";
import img24 from "../images/img24.jpg";
import img21 from "../images/img31.jpg";
import img22 from "../images/img22.jpg";
import img25 from "../images/img25.jpg";
import img26 from "../images/img26.jpg";
import img27 from "../images/img27.jpg";
import img28 from "../images/img28.jpg";
import img29 from "../images/img34.jpg";
import img30 from "../images/img30.jpg";

const datas = [
  {
    id: "1",
    img: img1,
  },
  {
    id: "2",
    img: img2,
  },
  {
    id: "3",
    img: img3,
  },
  {
    id: "4",
    img: img4,
  },
  {
    id: "5",
    img: img5,
  },
  {
    id: "6",
    img: img6,
  },
  {
    id: "7",
    img: img7,
  },
  {
    id: "8",
    img: img8,
  },
  {
    id: "9",
    img: img9,
  },
  {
    id: "10",
    img: img10,
  },
  {
    id: "11",
    img: img11,
  },
  {
    id: "12",
    img: img12,
  },
  {
    id: "13",
    img: img13,
  },
  {
    id: "14",
    img: img14,
  },
  {
    id: "15",
    img: img15,
  },
  {
    id: "16",
    img: img16,
  },
  {
    id: "17",
    img: img17,
  },
  {
    id: "18",
    img: img18,
  },
  {
    id: "19",
    img: img19,
  },
  {
    id: "20",
    img: img20,
  },
  {
    id: "21",
    img: img21,
  },
  {
    id: "22",
    img: img22,
  },
  {
    id: "23",
    img: img23,
  },
  {
    id: "24",
    img: img24,
  },
  {
    id: "25",
    img: img25,
  },
  {
    id: "6",
    img: img26,
  },
  {
    id: "27",
    img: img27,
  },
  {
    id: "28",
    img: img28,
  },
  {
    id: "29",
    img: img29,
  },
  {
    id: "30",
    img: img30,
  },
];

function Photos() {
  return (
    <div className="w-full h-full bg-black flex flex-row flex-wrap items-center">
      {datas.map((data) => (
        <div
          key={data.id}
          className="w-full md:w-1/2 lg:w-1/3 h-full flex justify-center flex-row flex-wrap items-center ease-in duration-300 hover:bg-zinc-100 rounded p-2"
        >
          <img
            src={data.img}
            alt=""
            fill
            className="object-cover w-80 h-80 rounded"
          />
        </div>
      ))}
    </div>
  );
}

export default Photos;
