import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <>
      <NavBar />
      <Breadcrumb />
      <ScrollToTop />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;