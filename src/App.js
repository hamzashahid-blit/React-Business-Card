import "./App.css";
import Info from "./components/info.jsx";
import About from "./components/about.jsx";
import Interests from "./components/interests.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <br />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
