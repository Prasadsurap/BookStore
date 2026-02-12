// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// function Login() {
//   const dialogRef = useRef(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Login Data:", data);
//     alert("Login successful!");
//     dialogRef.current?.close();
//   };

//   return (
//     <div>
//       <dialog
//         id="my_modal_3"
//         ref={dialogRef}
//         className="modal"
//       >
//         <div className="modal-box">
//           <Link
//             to="/"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={() => dialogRef.current?.close()}
//           >
//             ✕
//           </Link>

//           <h3 className="font-bold text-lg mb-4 ml-2">Login</h3>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
//               <label className="label">Email</label>
//               <input
//                 type="email"
//                 className="input w-full"
//                 placeholder="Enter your email"
//                 {...register("email", { required: "Email is required" })}
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">{errors.email.message}</span>
//               )}

//               <label className="label mt-2">Password</label>
//               <input
//                 type="password"
//                 className="input w-full"
//                 placeholder="Enter your password"
//                 {...register("password", { required: "Password is required" })}
//               />
//               {errors.password && (
//                 <span className="text-red-500 text-sm">{errors.password.message}</span>
//               )}

//               <div className="flex justify-between mt-4 py-2">
//                 <button
//                   type="submit"
//                   className="btn bg-black text-white hover:bg-gray-800"
//                 >
//                   Login
//                 </button>

//                 <p className="mt-3">
//                   Don’t have an account?{" "}
//                   <Link
//                     to="/signup"
//                     className="text-blue-500 text-sm font-semibold underline"
//                   >
//                     Signup
//                   </Link>
//                 </p>
//               </div>
//             </fieldset>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// }

// export default Login;


import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
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
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
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

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;