// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import SavedPage from "./pages/SavedPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </Router>
  );
};

export default App;

