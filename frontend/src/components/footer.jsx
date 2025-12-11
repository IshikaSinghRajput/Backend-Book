import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <Link
            to="/about"
            className="transition transform hover:scale-110 hover:text-pink-400"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="transition transform hover:scale-110 hover:text-pink-400"
          >
            Contact
          </Link>
          <Link
            to="/course"
            className="transition transform hover:scale-110 hover:text-pink-400"
          >
            Courses
          </Link>
          <Link
            to="/"
            className="transition transform hover:scale-110 hover:text-pink-400"
          >
            Home
          </Link>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://x.com/81Ishika5770"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="mailto:ishu37394@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 13.5 1.5 6v12c0 .825.675 1.5 1.5 1.5h18c.825 0 1.5-.675 1.5-1.5V6L12 13.5Zm0-3L22.5 3h-21L12 10.5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ishika-singh-rajput/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8.3 8h3.8v2.2h.1c.5-.95 1.75-2 3.6-2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.8c0-1.85-.03-4.2-2.6-4.2-2.6 0-3 2-3 4V24h-4z" />
              </svg>
            </a>
            <a
              href="https://github.com/IshikaSinghRajput"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73
        1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.417-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.93
        0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005
        2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 
        3.222 0 4.61-2.807 5.624-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293
        0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"
                />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Ishika Singh Rajput
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default footer;
