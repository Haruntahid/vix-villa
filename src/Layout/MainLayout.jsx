import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <div className="container mx-auto">
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
