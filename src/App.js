// import { Switch,Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Feature from "./components/Feature";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Feature />
      <About
        image={aboutimage}
        title="About us"
        paragraph="We are an independent policy institute and a trusted forum for debate and dialogue. Our research and ideas help people understand our changing world."
        button="Get the App"
      />

      <About
        image={aboutimage1}
        title="Categories"
        paragraph="Bitcoin. Bitcoin is a type of digital currency; it is “cash for the internet.” More specifically, it's considered cryptocurrency since cryptography facilitates Bitcoin creation and transactions."
        button="Download"
      />
      <Presentation />

      <Contact />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
