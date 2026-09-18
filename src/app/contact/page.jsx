"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // TODO: Send form data to your backend/API

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">Get In Touch</h1>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
            Have a question about our products or need help with your order?
            Send us a message and we will get back to you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm lg:col-span-1">
            <h2 className="text-2xl font-bold">Contact Information</h2>

            <p className="mt-3 text-sm leading-6 text-base-content/60">
              We are here to help. Feel free to contact us through any of the
              following methods.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:hello@herokidz.com"
                    className="text-sm text-base-content/60 hover:text-primary"
                  >
                    hello@herokidz.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+8801000000000"
                    className="text-sm text-base-content/60 hover:text-primary"
                  >
                    +880 1000-000000
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-base-content/60">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="textarea textarea-bordered min-h-40 w-full"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
