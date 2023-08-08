import React from "react";
import grey from "../../images/grey.jpeg";
import darker from "../../images/darker.jpeg";
import freed from "../../images/freed.jpeg";

const movies = [
  {
    id: "1",
    img: grey,
  },
  {
    id: "2",
    img: darker,
  },
  {
    id: "3",
    img: freed,
  },
];

function Film() {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="w-1/3 h-full flex justify-center items-center"
        >
          <img src={movie.img} alt="img" fill className="object-cover w-full h-96" />
        </div>
      ))}
    </div>
  );
}

export default Film;
