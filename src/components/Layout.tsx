import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <div className="font-primary flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-12 md:mt-15  flex-grow`">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
