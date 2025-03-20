"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { BiSolidSend } from "react-icons/bi";


export function BackgroundBeamsDemo() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e, location = "Location not available") => {
    e.preventDefault();
    setLoading(true);

    // Append location to message
    const messageTextarea = formRef.current.elements["message"];
    messageTextarea.value += `\n\nLocation: ${location}`;

    emailjs
      .sendForm(
        "service_001w5rn", // Replace with your EmailJS Service ID
        "template_gba8mtd", // Replace with your EmailJS Template ID
        formRef.current,
        "zNT8zRY_F6s_eUUt2" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("SUCCESS:", response);
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error("FAILED:", error);
        }
      )
      .finally(() => setLoading(false));
  };

  // Handle location retrieval
  const handleSubmit = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
          sendEmail(e, location);
        },
        (error) => {
          console.warn("Geolocation failed: ", error.message);
          sendEmail(e);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      sendEmail(e);
    }
  };

  return (
    <div  id="contact" className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Get in Touch
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Let's work together on your next project
        </p>

        {/* Motion Form with EmailJS Integration */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 bg-transparent p-6 rounded-lg shadow-lg max-w-2xl mx-auto relative z-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-transparent text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2  transition-colors"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"} <BiSolidSend />
          </button>
        </motion.form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
