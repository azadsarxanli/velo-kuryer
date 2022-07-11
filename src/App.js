import "./reset.scss";
import "./App.scss";

import Main from "./components/Main";
import Map from "./components/Map";
import Cards from "./components/Cards";
import Reason from "./components/Reason";
import Track from "./components/Track";
import Slider from "./components/Slider";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Main />
      <Map />
      <Cards />
      <Reason />

      <Track />
      <Slider />

      <Download />

      <Footer />
    </div>
  );
}

export default App;
