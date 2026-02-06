import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const dialogRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful!");

    // ✅ Close modal
    dialogRef.current?.close();
  };

  return (
    <div>
      <dialog
        id="my_modal_3"
        ref={dialogRef}
        className="modal"
      >
        <div className="modal-box">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => dialogRef.current?.close()}
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4 ml-2">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}

              <label className="label mt-2">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}

              <div className="flex justify-between mt-4 py-2">
                <button
                  type="submit"
                  className="btn bg-black text-white hover:bg-gray-800"
                >
                  Login
                </button>

                <p className="mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 text-sm font-semibold underline"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
