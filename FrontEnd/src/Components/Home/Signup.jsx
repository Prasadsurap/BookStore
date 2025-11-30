import React from "react";
import { useForm } from "react-hook-form";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    // Function to handle form submit
    const onSubmit = (data) => {
      console.log("Login Data:", data);
      alert("Login successful!");
    };
  return (
    <>
      <div
className="h-full bg-cover bg-center "        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/534ad50ae4b04a5110f5ae72/f0cd330d-46de-4f2e-864a-31e2741cf6ae/Salle+Ovale%2C+BNF+Richelieu%2C+Henri+Labrouste%2C+1936.jpg')",
        }}
      >
        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        {/* Signup Card */}
        <div className="flex h-screen justify-center items-center mt-16 z-10">
          <div className="relative border border-white/30 p-8 rounded-2xl bg-blue/20 backdrop-blur-xl shadow-2xl text-black w-96">
            {/* Header with Close Button */}
            <div className="relative mb-4">
              <h3 className="font-bold text-xl underline">Signup</h3>
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 text-white hover:bg-white/20">
                ✕
              </Link>
            </div>

            {/* Form Fields */}
            <fieldset className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white border-white/30"
                placeholder="Enter your full name"
              />

              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white border-white/30"
                placeholder="Enter your email"
                                {...register("email", { required: "Email is required" })}

              />
                {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white border-white/30"
                placeholder="Enter your password"
                                {...register("password", { required: "Password is required" })}

              />
                {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
              <div className="flex justify-between mt-4 items-center">
                <button className="btn bg-blue-600 hover:bg-blue-700 border-none text-white">
                  Sign Up
                </button>
                <p className="text-sm text-gray-200">
                  Have account?{" "}
                  <a
                   onClick={()=>document.getElementById('my_modal_3').showModal()}
                    className="text-blue-300 hover:underline font-semibold"
                  >
                    Login
                  </a>
                  <Login/>
                </p>

              </div>
            </fieldset>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Signup;
