import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser(null); // <-- Correct
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-black text-white transition transform hover:scale-110 dark:bg-pink-500 hover:bg-pink-500 text:white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
