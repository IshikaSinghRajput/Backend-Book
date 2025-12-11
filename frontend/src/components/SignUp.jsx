import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./login.jsx";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    const modal = document.getElementById("signup_modal");
    if (modal) modal.showModal();
  }, []);

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
      .post("/users/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Successfully SignedIn!");
          setAuthUser(res.data.user);
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error :" + err.response.data.message);
        }
      });
  };

  return (
    <dialog id="signup_modal" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Signup</h3>

          <div className="mt-4 space-y-2">
            <span>Fullname</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

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
            <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">
              Sign Up
            </button>

            {/* FIXED HERE — replaced <p> with <div> */}
            <div>
              Already have an account?{" "}
              <button
                className="underline text-blue-500 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default SignUp;
