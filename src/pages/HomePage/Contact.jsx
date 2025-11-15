// src/pages/ContactPage.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";


export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  // Use env variables (add them to .env as shown below)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus({ loading: true, success: null, message: "" });

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

      // success
      setStatus({
        loading: false,
        success: true,
        message: "Thanks — your message has been sent. I'll get back to you soon!",
      });

      // reset form
      formRef.current.reset();

      // hide success after a while
      setTimeout(() => setStatus({ loading: false, success: null, message: "" }), 6500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        loading: false,
        success: false,
        message:
          "Oops — something went wrong while sending. Please try again or email me directly at jindalgunjan14@gmail.com.",
      });
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-[#0a0018] via-[#13002c] to-[#0a0018] text-white py-24 px-6 flex justify-center">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl text-center font-light mb-10"
        >
          Contact <span className="font-semibold text-purple-400">Me</span>
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/6 backdrop-blur-xl border border-white/6 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6"
        >
          {/* NAME */}
          <div className="flex flex-col">
            <label htmlFor="from_name" className="text-purple-300 text-sm mb-1">
              Full Name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              className="bg-white/6 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-400 transition"
              placeholder="Enter your name"
              required
              aria-label="Full name"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label htmlFor="reply_to" className="text-purple-300 text-sm mb-1">
              Email Address
            </label>
            <input
              id="reply_to"
              name="reply_to"
              type="email"
              className="bg-white/6 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-400 transition"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-purple-300 text-sm mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="bg-white/6 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-400 transition"
              placeholder="Enter your phone (optional)"
              aria-label="Phone number"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-purple-300 text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="bg-white/6 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-purple-400 transition resize-none"
              placeholder="Write your message..."
              required
              aria-label="Message"
            ></textarea>
          </div>

          {/* HIDDEN LABELS (optional) */}
          {/* If you want to send some labels or extra fields to the email template,
              add hidden inputs here (for example: projectUrl, budget, subject removed by design) */}
          {/* <input type="hidden" name="project_url" value="" /> */}

          {/* SUBMIT BUTTON */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={status.loading}
              className={`flex-1 w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium transition shadow-lg
                ${
                  status.loading
                    ? "bg-purple-600/60 text-white cursor-wait"
                    : "bg-purple-500 hover:bg-purple-600 text-white"
                }`}
              aria-busy={status.loading}
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            <a
              href="mailto:jindalgunjan14@gmail.com"
              className="px-5 py-3 border border-white/10 rounded-lg text-sm text-neutral-200 hover:bg-white/6 transition"
            >
              Or email directly
            </a>
          </div>

          {/* STATUS MESSAGE */}
          {status.message && (
            <div
              role="status"
              className={`mt-2 px-4 py-3 rounded-md text-sm ${
                status.success ? "bg-green-600/20 text-green-300" : "bg-red-600/10 text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
