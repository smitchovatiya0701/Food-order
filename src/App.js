import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Section1 from "./pages/home/Section1";
// import Section2 from "./pages/home/Section2";
// import Section3 from "./pages/home/Section3";
// import Section4 from "./pages/home/Section4";
// import Section5 from "./pages/home/Section5";
// import Section6 from "./pages/home/Section6";
// import Section7 from "./pages/home/Section7";
// import "./styles/HomeStyles.css"

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home/>}></Route>.
      {/* <Route exact path="/section1" element={<Section1/>}></Route>
      <Route exact path="/section2" element={<Section2/>}></Route>
      <Route exact path="/section3" element={<Section3/>}></Route>
      <Route exact path="/section4" element={<Section4/>}></Route>
      <Route exact path="/section5" element={<Section5/>}></Route>
      <Route exact path="/section6" element={<Section6/>}></Route>
      <Route exact path="/section7" element={<Section7/>}></Route> */}

     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
