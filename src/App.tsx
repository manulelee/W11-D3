import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";
import NotFoundComponent from "./components/NotFoundComponent";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<JumbotronComponent />} />
          <Route path="/articles" element={<FetchComponent />} />
          <Route path="/articles/:id" element={<FetchComponent />} />
          <Route path="/*" element={<NotFoundComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
