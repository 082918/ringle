import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
