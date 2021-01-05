import React from "react";

// components
import VWNavbar from "./components/vwnavbar/vwnavbar.component";
import VWCarousel from "./components/vwcarousel/vwcarousel.component"
import VWTitleMsg from "./components/vwtitlemsg/vwtitlemsg.component"
import './App.css';

const App = () => {
  return (
  <div>
    <VWNavbar />
    <VWCarousel />
    <VWTitleMsg />
  </div>
  );
};
export default App;
