import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./assets/AllComponent/Pages/Home";
import About from "./assets/AllComponent/Pages/About";
import Products from "./assets/AllComponent/Pages/Products";
import Navbar from "./assets/AllComponent/Component/Navbar";
import NotFound from "./assets/AllComponent/Pages/NotFound";
import Footer from "./assets/AllComponent/Component/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>   
        <Footer/>    
      </BrowserRouter>
      
    </div>
  );
};

export default App;
