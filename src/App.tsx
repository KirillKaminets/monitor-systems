import React from "react";
import RoutsPage from "./routes/Routs";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Headers />
      <BrowserRouter>
        <RoutsPage />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
