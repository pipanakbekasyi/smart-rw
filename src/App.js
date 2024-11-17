import React from "react";
import Kegiatan from "../src/components/Kegiatan/Kegiatan";
import Home from "../src/components/Home/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
