import React from "react";
import About from "./src/components/About.jsx";
import Info from "./src/components/Info.jsx";
import Footer from "./src/components/Footer.jsx";
import Interests from "./src/components/Interests.jsx";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
