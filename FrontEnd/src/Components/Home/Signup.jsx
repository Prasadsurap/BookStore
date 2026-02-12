// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from 'axios'
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
// import Login from "./Login";

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   // Function to handle form submit
//   const onSubmit = async(data) => {
//     userInfo={
//       fullname:data.fullname,
//       email:data.email,
//       password:data.password
//     }
//     console.log('signup', userInfo)
//    await axios.post('http://localhost:4001/user/signup',userInfo)
//     .then((res)=>{
//       if(res.data){
//         alert('signup successfull')
//       }
//     }).catch((err)=>{
//       alert('err' + err)
//       console.log(err)
//     })
//   };
//   return (
//     <>
//       <div
//         className="h-full bg-cover bg-center "
//         style={{
//           backgroundImage:
//             "url('https://images.squarespace-cdn.com/content/v1/534ad50ae4b04a5110f5ae72/f0cd330d-46de-4f2e-864a-31e2741cf6ae/Salle+Ovale%2C+BNF+Richelieu%2C+Henri+Labrouste%2C+1936.jpg')",
//         }}
//       >
//         {/* Navbar */}
//         <div>
//           <Navbar />
//         </div>

//         {/* Signup Card */}
//         <div className="flex h-screen justify-center items-center mt-16 z-10">
//           <div className="relative border border-white/30 p-8 rounded-2xl bg-blue/20 backdrop-blur-xl shadow-2xl text-black w-96">
//             {/* Header with Close Button */}
//             <div className="relative mb-4">
//               <h3 className="font-bold text-xl underline">Signup</h3>
//               <Link
//                 to={"/"}
//                 className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0 text-white hover:bg-white/20"
//               >
//                 ✕
//               </Link>
//             </div>

//             {/* Form Fields */}
//             <fieldset className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
//               <label className="block text-sm font-semibold">fullName</label>
//               <input
//                 type="text"
//                 className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white border-white/30"
//                 placeholder="Enter your full fullname"
//               />

//               <label className="block text-sm font-semibold">Email</label>
//               <input
//                 type="email"
//                 className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white border-white/30"
//                 placeholder="Enter your email"
//                 {...register("email", { required: "Email is required" })}
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-sm">
//                   {errors.email.message}
//                 </span>
//               )}
//               <label className="block text-sm font-semibold">Password</label>
//               <input
//                 type="password"
//                 className="input input-bordered w-full bg-white/20 placeholder-gray-200 text-white border-white/30"
//                 placeholder="Enter your password"
//                 {...register("password", { required: "Password is required" })}
//               />
//               {errors.password && (
//                 <span className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </span>
//               )}
//               <div className="flex justify-between mt-4 items-center">
//                 <button className="btn bg-blue-600 hover:bg-blue-700 border-none text-white">
//                   Sign Up
//                 </button>
//                 <p className="text-sm text-gray-200">
//                   Have account?{" "}
//                   <a
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                     className="text-blue-300 hover:underline font-semibold"
//                   >
//                     Login
//                   </a>
//                   <Login />
//                 </p>
//               </div>
//             </fieldset>
//           </div>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Signup;


import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
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
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
     <div
        className="h-full bg-cover bg-center "
                style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/534ad50ae4b04a5110f5ae72/f0cd330d-46de-4f2e-864a-31e2741cf6ae/Salle+Ovale%2C+BNF+Richelieu%2C+Henri+Labrouste%2C+1936.jpg')",
        }}
      >     
        <div className="flex h-screen justify-center items-center mt-16 z-10">
         <div className="relative border border-white/30 p-8 rounded-2xl bg-blue/20 backdrop-blur-xl shadow-2xl text-black w-96">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
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
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
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
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

