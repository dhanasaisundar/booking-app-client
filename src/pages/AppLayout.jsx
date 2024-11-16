import { Outlet } from "react-router-dom";
import Navbar from "../ui/NavbarUi/Navbar";
import Footer from "../ui/Footer/Footer";

function AppLayout() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
