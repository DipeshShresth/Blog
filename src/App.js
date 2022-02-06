import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogViewPage from "./components/MainViewPage/BlogViewPage.js/BlogViewPage";
import BlogCollectionPage from "./components/MainViewPage/BlogCollectionPage/BlogCollectionPage";
import Home from "./components/MainViewPage/Home/Home";
import OurStory from "./components/MainViewPage/OurStory/OurStory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/blog-viewpage" element={<BlogViewPage />}></Route>
          <Route
            path="/blog-collectionpage"
            element={<BlogCollectionPage />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/our-story" element={<OurStory />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
