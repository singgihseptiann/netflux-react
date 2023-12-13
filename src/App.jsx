// App.jsx
import React from "react";

import NavbarComponents from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Layanan from "./components/layanan/Layanan";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <style>{`
        body {
          background: #1A1C22;;
          margin: 0;
        }
      `}</style>
      <NavbarComponents />
      <Hero />
      <Layanan />
      <Banner />
    </>
  );
}

export default App;
