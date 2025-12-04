import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </HashRouter>
  );
}
