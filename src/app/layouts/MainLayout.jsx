import React from "react";
import NavBar from "../components/UI/NavBar";
import Footer from "../components/UI/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
