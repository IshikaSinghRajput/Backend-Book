import React from "react";
import Home from "./home/home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/courses.jsx";
import SignUp from "./components/SignUp.jsx";
import Contacts from "./contacts/contacts.jsx";
import Aboutme from "./about/about.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/SignUp" />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/About" element={<Aboutme />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
