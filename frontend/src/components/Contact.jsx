import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-10 ">
      {/* HEADING */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-gray-300">
          We'd love to hear from you! Fill out the form below and our team will
          get back to you shortly.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8">
        <form className="space-y-5">
          {/* NAME */}
          <div>
            <label className="block mb-1 font-medium text-slate-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-300 
                         bg-gray-100 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring 
                         focus:ring-pink-400"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 font-medium text-slate-700 dark:text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-gray-100 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring 
                         focus:ring-pink-400"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-1 font-medium text-slate-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-gray-100 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring 
                         focus:ring-pink-400"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg 
                       font-medium text-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
