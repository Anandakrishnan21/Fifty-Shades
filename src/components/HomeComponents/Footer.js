import React from "react";

const data1 = [
  {
    id: "1",
    title: "Youtube",
    link: "https://www.youtube.com/@Fiftyshadesofgreymovieofficial",
  },
  {
    id: "2",
    title: "Instagram",
    link: "https://www.instagram.com/kricz_21/",
  },
  {
    id: "3",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/anandakrishnan-dinej-29b737227/",
  },
];

const movie2 = [
  {
    id: "1",
    title: "Fifty Shades of Grey",
  },
  {
    id: "2",
    title: "Fifty Shades Darker",
  },
  {
    id: "3",
    title: "Fifty Shades of Freed",
  },
];

function Footer() {
  return (
    <div className="w-full h-full md:h-80 lg:h-full bg-black text-white flex flex-col md:flex-row items-center py-2">
      <div className="w-full h-32 md:h-full md:w-1/3 flex flex-col justify-center items-center gap-2">
        <h3>Social Media</h3>
        {data1.map((data) => (
          <a href={data.link} className="w-full flex justify-center items-center">
            <div key={data.id} className="w-full flex justify-center items-center">
              <div>
                <p className="font-semibold text-base">{data.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="w-full h-32 md:h-full md:w-1/3 flex flex-col justify-center items-center gap-2">
        <h3>Movies</h3>
        {movie2.map((movie) => (
          <div key={movie.id} className="w-full flex justify-center items-center gap-2">
            <div>
              <p className="font-semibold text-base">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-32 md:h-full md:w-1/3 flex flex-col justify-center items-center gap-2">
        <h3>Address</h3>
        <div>
          <p className="font-semibold text-base">123, abc Road BSK 3</p>
          <p className="font-semibold text-base">xyz, Ernakulam, IN</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
