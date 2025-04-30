import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-11 lg:mt-20 flex-grow 2xl:container 2xl:mx-auto`">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
