import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
