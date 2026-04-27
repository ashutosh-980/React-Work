import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import KidCollection from "./pages/KidCollection";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed w-full">
        <Navbar />
        <Navbar2 />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic Routing on Courses Page */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseID" element={<CourseDetails />} />

        {/* Nested Routing on Product Page */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<MenCollection />} />
          <Route path="women" element={<WomenCollection />} />
          <Route path="kid" element={<KidCollection />} />
        </Route>

        {/* Wild Card Routing */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
