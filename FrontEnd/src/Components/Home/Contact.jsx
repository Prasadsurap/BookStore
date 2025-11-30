import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "YOUR_SERVICE_ID",      // 🔹 Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",     // 🔹 Replace with your EmailJS Template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "YOUR_PUBLIC_KEY"       // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10 mt-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-xl rounded-2xl p-8 max-w-lg w-full text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn bg-blue-600 hover:bg-blue-700 border-none text-white mt-4"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSubmitSuccessful && (
              <p className="text-green-400 text-center mt-3">
                Thanks! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
