import Navbar from "../components/navbar.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/footer.jsx";
import React from "react";

function contacts() {
  return (
    <div>
      <>
        <Navbar />
        <div className="min-h-screen">
          <Contact />
        </div>
        <Footer />
      </>
    </div>
  );
}

export default contacts;
