import React from "react";

const datas = Array.from({ length: 30 }, (_, id) => `../images/img${id + 1}.jpg`);

function Photos() {
  return (
    <div className="w-full h-full bg-black flex flex-row flex-wrap items-center">
      {datas.map((data, id) => (
        <div
          key={id}
          className="w-full md:w-1/2 lg:w-1/3 h-full flex justify-center flex-row flex-wrap items-center ease-in duration-300 hover:bg-zinc-100 rounded p-2"
        >
          <img
            src={data}
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
