import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";
import NotFoundComponent from "./components/NotFoundComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NotFoundComponent />} />
          <Route path="/articles" element={<FetchComponent />} />
          <Route path="/:id" element={<NotFoundComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
