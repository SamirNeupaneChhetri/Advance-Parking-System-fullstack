import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; 
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Services from "./pages/Service.jsx";
import Header from "./components/Header.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ReserveSpot from "./pages/ReserveSpot.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve-spot" element={<ReserveSpot />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;