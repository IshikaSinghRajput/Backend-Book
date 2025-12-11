import Navbar from "../components/navbar.jsx";
import About from "../components/About.jsx";
import Footer from "../components/footer.jsx";
import React from "react";

function contacts() {
  return (
    <div>
      <>
        <Navbar />
        <div className="min-h-screen">
          <About />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default contacts;
