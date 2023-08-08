import React from "react";
import actor1 from "../images/actor2.jpg";
import actor2 from "../images/actor1.jpg";
import actor3 from "../images/actor4.jpg";

function Cast() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center py-2">
      <div className="w-5/6 md:w-1/2 flex flex-row justify-center items-center md:px-4 gap-2">
        <img src={actor1} alt="fs1" className="rounded w-3/5" />
        <div className="flex h-full flex-col justify-center gap-5">
          <img src={actor2} alt="" className="rounded" />
          <img src={actor3} alt="" className="rounded" />
        </div>
      </div>
      <div className="w-5/6 md:w-1/2 flex flex-col justify-center items-center gap-5 p-4">
        <h2 className="font-sans text-2xl md:text-3xl lg:text-6xl font-bold">
          COOL CAST
        </h2>
        <p className="text-justify">
          Fifty Shades is a British-American film trilogy series based on the
          Fifty Shades trilogy by English author E. L. James. It is distributed
          by Universal Studios and stars Dakota Johnson and Jamie Dornan as the
          lead roles Anastasia Steele and Christian Grey, respectively.
        </p>
      </div>
    </div>
  );
}

export default Cast;
