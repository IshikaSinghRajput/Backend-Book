import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import books from ".././../public/Banner (2).png";

function banner() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("Users");
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      setUsername(userObj.fullname);
    }
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className=" order-2 md:order-1 w-full md:w w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello{" "}
              {username ? (
                <span className="text-pink-500 font-extrabold">{username}</span>
              ) : (
                ""
              )}
              , You are welcome here to learn something{" "}
              <span className="text-pink-500 dark:text-white">
                new everyday
              </span>
            </h1>

            <p className="text-xl">
              Welcome to our bookstore, where every page opens a new world.
              Explore a wide range of books across genres—fiction, non-fiction,
              self-help, academic, and more. Whether you’re a passionate reader,
              a student, or someone looking to learn new skills, we have
              something for everyone.
            </p>
            <label className="input validator border rounded-md">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
          </div>
          <Link to="/SignUp">
            <button className="mt-6 btn btn-soft btn-secondary bg-pink-500 text-white p-5">
              Get Started
            </button>
          </Link>
        </div>

        <div className="order-1 w-full mt-10 md:mt-20 md:w-1/2 flex justify-center mb-10">
          <img
            src={books}
            alt="banner"
            className="
      w-full 
      max-w-[320px]      /* mobile */
      sm:max-w-[480px]   /* small tablets */
      md:max-w-[600px]   /* tablets / small laptops */
      lg:w-[550px]   /* laptops */
      object-contain
    "
          />
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default banner;
