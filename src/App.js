import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Games from "./pages/Games";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/games" element={<Games />} />
      </Routes>
  );
}