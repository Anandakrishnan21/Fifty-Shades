import Navbar from "./components/header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Image from "./components/Pages/Image";
import Video from "./components/Pages/Video";
import Novel from "./components/InnerNavComponents/Novel";
import PlayTool from "./components/InnerNavComponents/PlayTool";
import Accessories from "./components/InnerNavComponents/Accessories";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/novel" element={<Novel />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/playroom" element={<PlayTool />} />
        </Route>
        <Route path="/image" element={<Image />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
