import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MainLayout() {
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);
  return (
    <>
      <div className="container mx-auto min-h-[70vh]">
        <Navbar />
        <Outlet />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
