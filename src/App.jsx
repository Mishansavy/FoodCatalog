import { BrowserRouter, Route, Routes } from "react-router-dom";
//views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/FilteredFoods";
//Styles
import "./index.css";
//Header and Footer
import Header from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* header  */}
      <div className="max-w-full">
        <Header />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/About" />
        <Route element={<Foods />} path="/Foods" />
        <Route element={<Foods />} path="/FilteredFoods/:slug" />
      </Routes>
      <div className="max-w-full">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
