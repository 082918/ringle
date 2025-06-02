import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import Best from "./pages/Best";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<Best />} />
        <Route path="/product" element={<Login />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
