import Navbar from "./components/nav/navbar";
import * as React from "react";
import Productos from "./Pages/Productos/Productos";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/404/error";
import OliveCard from "./components/OliveCard/OliveCard";
import ProductoDetail from "./Pages/ProductoDetail/ProductoDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OliveCard />} />
        <Route path="/producto/:id/" element={<ProductoDetail />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
