import React, { useEffect } from "react";
import { Outlet, useNavigation, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import NavBar from "../components/layout/NavBar/NavBar";
import Footer from "../components/layout/Footer/Footer";
import LoadingPage from "../utils/LoadingPage";

const RootLayout = () => {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (state === "loading") {
    return <LoadingPage />;
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default RootLayout;
