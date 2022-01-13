import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BlogViewPage from "./components/MainViewPage/BlogViewPage.js/BlogViewPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogViewPage />
      <Footer />
    </div>
  );
}

export default App;
