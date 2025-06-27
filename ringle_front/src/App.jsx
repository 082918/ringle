import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import data from "./data.jsx";
import NavBar from "./components/NavBar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Login from "./pages/login";
import Best from "./pages/Best";
import Event from "./pages/Event";
import Detail from "./pages/Detail";

function App() {
  let navigate = useNavigate();
  // 페이지 이동을 도와줌

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<Best />} />
        <Route path="/product" element={<Login />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div> one</div>}></Route>
          <Route path="two" element={<div> two</div>}></Route>
        </Route>
        <Route path="/detail/:id" element={<Detail product={data} />} />
        <Route path="*" element={<div> 없는페이지 </div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
