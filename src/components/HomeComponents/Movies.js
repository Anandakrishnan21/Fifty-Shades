import React from "react";

const movies = [
  {
    id: "1",
    title: "GREY",
  },
  {
    id: "2",
    title: "DARKER",
  },
  {
    id: "3",
    title: "FREED",
  },
];

function Movies() {
  return (
    <div className="w-full h-24 bg-black text-white flex flex-row justify-  items-center">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="w-1/3 h-full flex justify-center items-center"
        >
          <p className="w-full h-full flex justify-center items-center text-xl md:text-3xl font-semibold">
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
