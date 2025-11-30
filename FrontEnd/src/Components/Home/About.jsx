import React from "react";
import { Fade } from "react-awesome-reveal"; // optional animation lib (npm i react-awesome-reveal)
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
        <Navbar/>
  
    <div className="min-h-screen mt-16 bg-gradient-to-b from-emerald-300 to-blue-200 dark:from-slate-800 dark:to-slate-900 text-gray-800 dark:text-white">
      {/* Header Section */}
      <section className="text-center py-20">
        <Fade direction="up">
          <h1 className="text-5xl font-bold mb-4">About Our BookStore</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Welcome to <span className="font-semibold text-amber-600 dark:text-amber-400">BookVerse</span>, 
            your digital destination for discovering stories, knowledge, and imagination. 
            We connect readers with books that inspire and empower.
          </p>
        </Fade>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-8 md:px-20 bg-white/40 dark:bg-slate-700/40 backdrop-blur-md rounded-2xl mx-6 shadow-xl">
        <Fade direction="left">
          <h2 className="text-3xl font-bold mb-4">📖 Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            At <b>BookVerse</b>, we believe books have the power to transform lives. 
            Our mission is to make reading accessible to everyone — whether you love 
            fiction, non-fiction, or educational material. We partner with publishers 
            and authors worldwide to bring affordable and quality books to your fingertips.
          </p>
        </Fade>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-8 md:px-20 text-center">
        <Fade direction="up">
          <h2 className="text-3xl font-bold mb-6">🌟 Our Vision</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-200">
            To create a global community of readers where knowledge and creativity thrive.  
            We envision a world where every individual has access to the stories that 
            shape humanity — one book at a time.
          </p>
        </Fade>
      </section>

      {/* Team / Founder Section */}
      <section className="py-20 px-8 md:px-20 bg-amber-100/30 dark:bg-slate-700/40 rounded-t-3xl">
        <Fade direction="up">
          <h2 className="text-3xl font-bold mb-10 text-center">👥 Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white/30 dark:bg-slate-800 rounded-2xl shadow-md backdrop-blur-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Founder"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Alex Johnson</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Founder & CEO
              </p>
            </div>
            <div className="p-6 bg-white/30 dark:bg-slate-800 rounded-2xl shadow-md backdrop-blur-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145867.png"
                alt="Manager"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Sarah Lee</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Operations Manager
              </p>
            </div>
            <div className="p-6 bg-white/30 dark:bg-slate-800 rounded-2xl shadow-md backdrop-blur-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/921/921071.png"
                alt="Designer"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center">David Kim</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Creative Designer
              </p>
            </div>
          </div>
        </Fade>
      </section>

      {/* Footer Message */}
      <footer className="py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} BookVerse — All Rights Reserved.
        </p>
      </footer>
      </div>
    <Footer/>
    </div>
  );
}

export default About;
