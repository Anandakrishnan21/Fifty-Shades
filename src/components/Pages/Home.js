import React from "react";
import Shopping from './Shopping'
import Introduction from "../HomeComponents/Introduction";
import Movies from "../HomeComponents/Movies";
import Film from "../HomeComponents/Film";
import Cast from "../HomeComponents/Cast";
import Footer from "../HomeComponents/Footer";


function Home() {
  return (
    <>
      <Introduction />
      <Movies />
      <Film />
      <div className="w-full h-full">
        <Shopping />
      </div>
      <Cast />
      <Footer />
    </>
  )
}

export default Home;
