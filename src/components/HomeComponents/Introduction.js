import React from "react";
import fs1 from "../images/fs1.jpeg";

function Introduction() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center py-2">
      <div className="w-5/6 md:w-1/2 flex flex-col justify-center items-center gap-5 p-4">
        <h2 className="font-sans text-2xl md:text-3xl lg:text-6xl font-bold">FIFTY SHADES TRILOGY</h2>
        <p className="text-justify">
          Fifty Shades is a series of erotic novels by E. L. James, initially a
          trilogy consisting of Fifty Shades of Grey, Fifty Shades Darker and
          Fifty Shades Freed. The series traces the deepening relationship
          between college graduate Anastasia Steele and young businessman
          Christian Grey, who introduces Ana to the world of BDSM.
        </p>
      </div>
      <div className="w-5/6 md:w-1/2 flex justify-center items-center md:px-4">
        <img src={fs1} alt="fs1" className="rounded "/>
      </div>
    </div>
  );
}

export default Introduction;
