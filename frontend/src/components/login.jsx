import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider.jsx";
import Logout from "./Logout.jsx";

function login() {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("/users/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully LoggedIn!");
          setTimeout(() => {
            setAuthUser(res.data.user);

            // save user BEFORE reload
            localStorage.setItem("Users", JSON.stringify(res.data.user));

            document.getElementById("my_modal_3").close();
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error :" + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* FORM STARTS HERE */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link to="/signup">
                  <span className="underline text-blue-500 cursor-pointer">
                    Signup
                  </span>
                </Link>
              </p>
            </div>
          </form>
          {/* FORM ENDS HERE */}
        </div>
      </dialog>
    </div>
  );
}

export default login;
