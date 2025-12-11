import React from "react";
import axios from "axios";
import Cards from "./cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="pt-24 max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 ">
            Explore Our Learning Hub Our Course section is designed to help you
            grow beyond reading. Here, you’ll find a collection of carefully
            curated learning programs that complement your love for books. From
            writing and communication to technology, business, and personal
            development, each course is created to enrich your knowledge and
            boost your skills. Whether you’re a beginner or looking to advance
            further, our courses offer a flexible and accessible way to learn at
            your own pace. Start your learning journey today and unlock new
            opportunities with every lesson.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default course;
