import React from "react";
import Bannerimg from "/Bannerimg.jpg";
import { Fade } from "react-awesome-reveal";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16">
      {/* Left Side */}
      <div className="w-full md:w-1/2 order-2 md:order-1 md:mt-35 mt-10">
        <Fade direction="up">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              esse corrupti vel praesentium quos aperiam inventore accusantium sit
              sed vitae, numquam aut, pariatur, possimus distinctio placeat!
            </p>

            <div>
              <label className="input validator flex items-center gap-2">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  className="outline-none bg-transparent"
                />
              </label>
            </div>

            <button className="btn btn-secondary mt-2">Send</button>
          </div>
        </Fade>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 order-1">
        <img src={Bannerimg} alt="Banner" className="rounded-xl" />
      </div>
    </div>
  );
}

export default Banner;
