import React from "react";

function About() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 pb-16">
      {/* HEADING */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
          About <span className="text-pink-500">BookStore</span>
        </h1>
        <p className="mt-3 text-slate-600 dark:text-gray-300">
          Your favorite place to learn, grow, and explore knowledge.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* LEFT — IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="public\About.jpg"
            className="rounded-xl shadow-lg"
            alt="About BookStore"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Empowering Learners Every Day
          </h2>

          <p className="text-lg text-slate-700 dark:text-gray-300 leading-7">
            BookStore is built for learners who believe in the power of
            knowledge. Whether you're a beginner or a professional, our platform
            brings you curated books, personalized recommendations, and a
            user-friendly interface to make reading enjoyable.
          </p>

          <p className="text-lg text-slate-700 dark:text-gray-300 leading-7">
            Our mission is simple — make learning accessible, affordable, and
            fun. From self-help to technology, fiction to academics, we aim to
            offer content that helps you improve a little every day.
          </p>

          {/* small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-lg shadow-md bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-pink-500">
                1000+ Books
              </h3>
              <p className="text-slate-700 dark:text-gray-300">
                Wide collection for all learning levels.
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-md bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-pink-500">
                Curated Content
              </h3>
              <p className="text-slate-700 dark:text-gray-300">
                Carefully selected books to boost your growth.
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-md bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-pink-500">
                User-Friendly
              </h3>
              <p className="text-slate-700 dark:text-gray-300">
                Clean, modern, and distraction-free UI.
              </p>
            </div>

            <div className="p-5 rounded-lg shadow-md bg-white dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-pink-500">Dark Mode</h3>
              <p className="text-slate-700 dark:text-gray-300">
                Smooth light & dark theme support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Our <span className="text-pink-500">Mission</span>
        </h2>
        <p className="mt-4 text-lg md:w-2/3 mx-auto text-slate-700 dark:text-gray-300 leading-7">
          To inspire minds by making reading accessible to everyone. We believe
          learning should never stop, and with BookStore, you can explore new
          ideas anytime, anywhere.
        </p>
      </div>
    </div>
  );
}

export default About;
